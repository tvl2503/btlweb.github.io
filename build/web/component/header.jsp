<%-- 
    Document   : header
    Created on : May 11, 2022, 9:17:42 AM
    Author     : Linh Tran Vo
--%>
<%@page import="fe.NavBar"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" href="./css/index.css">
        <link
        rel="stylesheet"
        href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
      />
         <link
            rel="stylesheet"
            href="https://kit-pro.fontawesome.com/releases/v5.12.0/css/pro.min.css"
        />
    </head>
    <body>
<header class="header shadow-sm" id="header">
      <div class="container">
        <div class="d-grid align-items-center header__menu" id="header__menu">
          <div class="header__menu__mobile-toggle pointer" id="nav-toggle">
            <i class="fal fa-bars"></i>
          </div>
            <div class="header__menu__left" id="nav-menu">
                <div class="header__menu__left__close" id="nav-close">
                  <i class="fal fa-angle-left"></i>
                </div>
                <%
                    List<NavBar> list = new ArrayList<>();
                    list.add(new NavBar("Trang chủ", "/"));
                    list.add(new NavBar("Cửa hàng", "/store"));
                    list.add(new NavBar("Giới thiệu", "/about-us"));
                    for(NavBar i: list){
                        String title = i.getName();
                        String pathh = i.getPath();
                 %>     
                 <div class="header__menu__item header__menu__left__item">
                    <a href="/btl_web<%=pathh%>" class="nav__link"><%=title%></a>
                    <i class="fal fa-angle-down"></i>
                </div>
                 <%
                    }
                  %>     
               
                <div class="text-center d-grid grid-col-1 gap-16 auth-options">
                  <p class="f-18 weight-600">My Account</p>
                  <a href="/btl_web/login.jsp"><button class="btn btn-black">Log in</button></a>
                  <a><button class="btn btn-outlined">Register</button></a>
                </div>
            </div>
          <a class="d-flex justify-center align-center h-100" href="/">
            <div class="header__logo">
                <img src="<%=request.getContextPath() %>/images/static/logo_dark.png" />
            </div>
          </a>
          <div class="header__menu__right">
              <div
              class="header__menu__item header__menu__right__item btn-search"
            >
             <i class="fal fa-search"></i>
            </div>
              <%
                  if(session.getAttribute("account") != null){
                       %>
                       

            <div
              class="header__menu__item header__menu__right__item user--option"
            >
              <a href="/btl_web/login.jsp"> <i class="fal fa-user"></i></a>
            </div>

            <div class="header__menu__item header__menu__right__item shopping--bag">
                <i class="fal fa-shopping-bag"></i>
            </div>
          </div>
                       <%
                  }
              %>
              <% 
                  if(session.getAttribute("account") == null){
                       %> 
                       <div
              class="header__menu__item header__menu__right__item user--option"
            >
              <a href="/btl_web/login.jsp"> Đăng nhập</i></a>
            </div>
            
                <%   
                }
              %>
            
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
        <img src="<%=request.getContextPath() %>/images/static/logo_dark.png" />
      </div>
      <div class="input--search">
        <form>
            <input type="text" name = "q" placeholder="Search Products" />
            <i class="fal fa-search"></i>

        </form>
      </div>
      <ul class="d-flex right--options">
        <li>
          <a href="/login.html"><i class="fal fa-user"></i></a>
        </li>
        <li>
          <a href="/">
            <i class="fal fa-star"></i>
          </a>
        </li>
        <li>
            <i class="fal fa-shopping-bag"></i>
        </li>
      </ul>
    </div>
    <div class="cart--user shadow-sm">
      <div class="d-flex justify-center align-center close--button pointer">
        <i class="f-24 fal fa-times"></i>
      </div>
      <h5 class="f-18 weight-500 pb-16">Shopping Cart</h5>
      <div class="d-grid grid-col-1 gap-16 overflow-scroll items">
        <div class="d-flex item--cart">
          <div class="image-cart pr-16">
            <img
              src="<%=request.getContextPath() %>/images/static/logo_dark.png"
              alt=""
            />
          </div>
          <div class="content-cart">
            <a class="f-14" href="">Quilted Shoulder Bag</a>
            <p class="f-14 pb-10 price--item">$22.00</p>
            <div class="d-flex align-center">
              <ul class="d-grid grid-col-3 align-center text-center pointer button--quantity">
                <li>-</li>
                <li>50</li>
                <li>+</li>
              </ul>
              <span class="f-12 pl-12 remove-item">Remove</span>
            </div>
          </div>
        </div>
      </div>
      <div class="total--checkout">
        <div class="d-flex justify-between align-center f-14 pb-10">
          <p>Subtotal</p>
          <p>$66.00</p>
        </div>
        <button class="btn btn-black w-100">Check out</button>
      </div>
    </div>
    </body>
</html>
