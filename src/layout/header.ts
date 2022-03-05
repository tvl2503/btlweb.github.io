import { insertStringElement } from "../utils/element/utilsElement";

export const getHeader = () => {
  const header = `
    <header class="header shadow-sm" id="header">
      <div class="container">
        <div class="d-grid align-items-center header__menu" id="header__menu">
          <div class="header__menu__mobile-toggle pointer" id="nav-toggle">
            <i class="bx bx-menu"></i>
          </div>
            <div class="header__menu__left" id="nav-menu">
                <div class="header__menu__left__close" id="nav-close">
                  <i class="fal fa-angle-left"></i>
                </div>
                <div class="header__menu__item header__menu__left__item">
                  <a href="#" class="nav__link">Home</a>
                  <i class="fal fa-angle-down"></i>
                </div>
                <div class="header__menu__item header__menu__left__item">
                  <a href="#" class="nav__link">Shops</a>
                  <i class="fal fa-angle-down"></i>
                </div>
                <div class="header__menu__item header__menu__left__item">
                  <a href="#" class="nav__link">Products</a>
                  <i class="fal fa-angle-down"></i>
                </div>
                <div class="header__menu__item header__menu__left__item">
                  <a href="#" class="nav__link">About Us</a>
                  <i class="fal fa-angle-down"></i>
                </div>
                <div class="text-center d-grid grid-col-1 gap-16 auth-options">
                  <p class="f-18 weight-600">My Account</p>
                  <a><button class="btn btn-black">Log in</button></a>
                  <a><button class="btn btn-outlined">Register</button></a>
                </div>
            </div>
          <a class="d-flex justify-center align-center h-100" href="/">
            <div class="header__logo">
              <img src="images/logo_dark.png" />
            </div>
          </a>
          <div class="header__menu__right">
            <div
              class="header__menu__item header__menu__right__item btn-search"
            >
              <i class="bx bx-search"></i>
            </div>

            <div
              class="header__menu__item header__menu__right__item user--option"
            >
              <a href="/"> <i class="bx bx-user"></i></a>
            </div>
            <div
              class="header__menu__item header__menu__right__item favourite--option"
            >
              <a href="/">
                <i class="bx bx-star"></i>
              </a>
            </div>
            <div class="header__menu__item header__menu__right__item">
              <a href="/">
                <i class="bx bx-shopping-bag"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div
      class="container d-flex justify-between align-center container--search"
    >
      <div class="d-flex justify-between align-center title--search">
        <p>Search our store</p>
        <div class="close--btn">
          <i class="far fa-times"></i>
        </div>
      </div>

      <div class="logo--search">
        <img src="images/logo_dark.png" />
      </div>
      <div class="input--search">
        <input type="text" placeholder="Search Products" />
        <i class="bx bx-search"></i>
      </div>
      <ul class="d-flex right--options">
        <li>
          <a href="/"> <i class="bx bx-user"></i></a>
        </li>
        <li>
          <a href="/">
            <i class="bx bx-star"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="bx bx-shopping-bag"></i>
          </a>
        </li>
      </ul>
    </div>
    `;
  insertStringElement(document.getElementById("header")!, header, "afterbegin");
};
