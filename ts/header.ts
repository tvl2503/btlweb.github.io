let firstScroll = 0;
let currentScroll = 0;
const deboundScrollHandler = () => {
  const header = document?.querySelector("#header");
  const offset = window.scrollY;
  currentScroll = offset;
  if (currentScroll > firstScroll) {
    header?.classList.add("debound-scroll");
  } else {
    header?.classList.remove("debound-scroll");
  }
  firstScroll = currentScroll;
};

const transitionHeader = () => {
  window.addEventListener("scroll", deboundScrollHandler);
};

transitionHeader();

const transitionSearch = () => {
  const overlay = document.querySelector(".model");
  const button = document.querySelector(".btn-search");
  const header = document.querySelector(".container--search");

  const toggleHeader = () => {
    header?.classList.toggle("reset--translate");
  };
  button?.addEventListener("click", toggleHeader);
  overlay?.addEventListener("click", toggleHeader);

  const input = header?.querySelector("input");
  input?.addEventListener("input", async (event: Event) => {
    const { value } = <HTMLInputElement>event.target;
    // const response = await fetch('url.....');
    // const data = await response.json();
    // console.log(data);
  });
};

transitionSearch();
