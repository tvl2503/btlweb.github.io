import { getHeader } from "../layout/header";
import { ListQueryIndex } from "../models/shop";
import { classListToggleElement } from "../utils/classList";
import { insertStringElement } from "../utils/element/utilsElement";
import { insertURLParams, removeUrlParameter } from "../utils/params";
import DetectScreen from "../utils/resize";

getHeader();

const resizeScreenListener = new DetectScreen(991);
let isMobile = resizeScreenListener.isMobile;

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

(function () {
  let icons = ["two-line", "three-line", "four-line"];
  const listRender = document.querySelector(".list--style")!;
  const listItems = document.querySelector('.products--grid')! as HTMLDivElement;
  const createElementString = icons.map(
    (item, index) =>
      `<li data-content="${
        index + 2
      } columns" data-render=${index + 2}><img src="../../images/icons/${item}.svg"/></li>`
  );
  insertStringElement(listRender, createElementString.join(""), "afterbegin");
  
  const li = listRender.querySelectorAll('li');
  const handleOnClick = (target: HTMLLIElement) => {
    const cols = target.getAttribute('data-render');
    li.forEach(item => {
      item.classList.remove('active--button');
    })
    target.classList.add('active--button');
    listItems.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    // listItems.className = `pt-30 d-grid gap-16 products--grid grid-col-${cols}`
  }
  li.forEach(item => {
    item.addEventListener('click', event => handleOnClick(item));
  })
})();

(function(){
  
  const eyes = document.querySelectorAll('.open--layout');
  const modal = document.querySelector('.model--watch');
  const onHandleModel = () => {
    modal?.classList.toggle('model--watch-active');
  }
  eyes.forEach(element => {
    element.addEventListener('click', onHandleModel);
  })
  modal?.addEventListener('click', onHandleModel);
})();