import { getHeader } from "../layout/header";
import { ListQueryIndex } from "../models/shop";
import { classListToggleElement } from "../utils/classList";
import { insertStringElement } from "../utils/element/utilsElement";
import { insertURLParams, removeUrlParameter } from "../utils/params";

getHeader();

(function () {
  const inputRange = document.getElementById("range") as HTMLInputElement;
  const priceOutput = document.querySelector(".range--output")!;
  // const lineMark = document.querySelector('.input--range span') as HTMLSpanElement;
  priceOutput.textContent = `${inputRange.value}$ - ${inputRange.max}$`;
  // lineMark.style.width = `${((+inputRange.value - 10) / +inputRange.max) * 100}%`;
  const onChangeInput = (event: Event) => {
    const value = (<HTMLInputElement>event.target).value;
    priceOutput.textContent = `${value}$ - ${inputRange.max}$`;
    // lineMark.style.width = `${((+inputRange.value - 10) / +inputRange.max) * 100}%`;
  };
  inputRange?.addEventListener("input", onChangeInput);
})();

(function () {
  const list: Array<ListQueryIndex> = [
    {
      value: "Default",
      query: "",
    },
    {
      value: "Best Selling",
      query: "best-selling",
    },
    {
      value: "Alphabetically, A-Z",
      query: "title-asc",
    },
    {
      value: "Alphabetically, Z-A",
      query: "title-desc",
    },
    {
      value: "Price",
      query: "price",
    },
  ];
  const btn = document.querySelector(".value--sort") as HTMLParagraphElement;
  const spanValue = btn.querySelector("span")!;
  const listGroup = document.querySelector(".choose--sort")!;
  const stringItem = list
    .map((item, index) => {
      if (item.value === spanValue.textContent?.trim()) {
        return `<li data-value="${index}" class="activated">${item.value}</li>`;
      }
      return `<li data-value=${index}>${item.value}</li>`;
    })
    .join("");

  insertStringElement(listGroup, stringItem, "afterbegin");

  const handleClick = () => {
    classListToggleElement(listGroup, "active");
  };
  btn?.addEventListener("click", handleClick);

  const listGroupItem = listGroup.querySelectorAll("li");
  listGroupItem.forEach((item) => {
    item.onclick = () => {
      handleClick();
      spanValue.textContent = item.textContent;
      const findElement = list.find(
        (_, index) => index === +item.getAttribute("data-value")!
      );
      if (findElement) {
        findElement.query
          ? insertURLParams("sort", findElement.query)
          : removeUrlParameter("sort");
      }
      listGroupItem.forEach((listValue) => {
        listValue.classList.remove("activated");
      });
      item.classList.add("activated");
    };
  });
})();


