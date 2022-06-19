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
                            for (NavBar i : list) {
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

                        <% 
                        if (session.getAttribute("account") == null) {
                        %>

                        <div class="text-center d-grid grid-col-1 gap-16 auth-options">
                            <p class="f-18 weight-600">Tài khoản</p>
                            <a href="/btl_web/login.jsp"><button class="btn btn-black">Đăng nhập</button></a>
                            <a><button class="btn btn-outlined">Đăng ký</button></a>
                        </div>
                        <% 
                          }
                        %>
                    </div>
                    <a class="d-flex justify-center align-center h-100" href="/btl_web/index">
                        <div class="header__logo">
                            <img src="<%=request.getContextPath()%>/images/static/logo_dark.png" />
                        </div>
                    </a>
                    <div class="header__menu__right">
                        <div
                            class="header__menu__item header__menu__right__item btn-search"
                            >
                            <span class="tooltip">
                            <i class="fal fa-search"></i>
                            <span>Tìm kiếm</span>
                            </span>
                        </div>
                        <%
                            if (session.getAttribute("account") != null) {
                        %>


                        <div
                            class="header__menu__item header__menu__right__item user--option"
                            >
                            <a class="tooltip" href="/btl_web/logout"> 
                              <i class="fal fa-user"></i>
                              <span>Đăng xuất</span>
                            </a>
                        </div>

                        <div class="header__menu__item header__menu__right__item shopping--bag">
                            <a class="tooltip" href="/btl_web/cart"> 
                              <i class="fal fa-shopping-bag"></i>
                              <span>Giỏ hàng</span>
                            </a>
                        </div>
                    </div>
                    <%
                        }
                    %>
                    <%
                        if (session.getAttribute("account") == null) {
                    %> 
                    <div
                        class="header__menu__item header__menu__right__item user--option"
                        >
                         <a class="tooltip" href="/btl_web/login.jsp">
                    <i class="fal fa-user"></i>
                    <span>Đăng nhập</span>
                  </a>
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
                <img src="<%=request.getContextPath()%>/images/static/logo_dark.png" />
            </div>
            <div class="input--search">
                <form method="GET" action = "search">
                        <input type="text" name = "key" placeholder="Search Products" />
                    <button class="btn-submit" type="submit">
                        <i class="fal fa-search"></i> 
                    </button>
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
                    <a href="/btl_web/cart"> <i class="fal fa-shopping-bag"></i></a>
                   
                </li>
            </ul>
        </div>

    </body>
</html>
