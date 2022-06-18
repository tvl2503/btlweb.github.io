<%-- 
    Document   : home
    Created on : May 11, 2022, 9:16:59 AM
    Author     : Linh Tran Vo
--%>

<%@page import="java.util.List"%>
<%@page import="model.Product"%>
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
        <div id="navigation">
            <jsp:include page = "./component/header.jsp" />
        </div>
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
                <img src="./images/logo_dark.png" />
            </div>
            <div class="input--search">
                <input type="text" placeholder="Search Products" />
                <i class="bx bx-search"></i>
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
                            src="./images/static/17a_63ae1f60-59df-4061-b191-acb01aaa6ca4_360x.webp"
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
        <div class="layout--top">
            <div class="swiper swiper--container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <img
                            src="./images/static/1_1_fceb7353-78a7-4989-9d30-c518e373fbf9_2700x.jpeg"
                            />
                        <div class="content-slide">
                            <h5 class="f-20 weight-600">New Arrivals</h5>
                            <p class="f-42 pb-42 pt-32">Double Breasted</p>
                            <a href="/btl_web/store"
                               ><button class="btn btn-white btn-outlined f-16">
                                    Shop Now
                                </button></a
                            >
                        </div>
                        <div
                            class="d-flex align-items-center justify-content-center support-content"
                            >
                            <p class="f-14 pr-16">The ReCotton Tee</p>
                            <a class="f-14 pl-16" href="">Shop Now</a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img
                            src="./images/static/3_1_9f45ab3f-ad44-489b-bda1-f8a0c4ff04a5_2450x.jpeg"
                            alt=""
                            />
                        <div class="content-slide">
                            <h5 class="f-20 weight-600">New Arrivals</h5>
                            <p class="f-42 pb-42 pt-32">Autumn Collection</p>
                            <a
                                ><button class="btn btn-white btn-outlined f-16">
                                    Shop Now
                                </button></a
                            >
                        </div>
                        <div
                            class="d-flex align-items-center justify-content-center support-content"
                            >
                            <p class="f-14 pr-16">The ReCotton Tee</p>
                            <a class="f-14 pl-16" href="">Shop Now</a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img
                            src="./images/static/2_1_4b9cc6c7-5762-4636-8eb4-c6162c34e660_2700x.jpeg"
                            alt=""
                            />
                        <div class="content-slide">
                            <h5 class="f-20 weight-600">Hot Trend</h5>
                            <p class="f-42 pb-42 pt-32">Venice Haute Couture</p>
                            <a href=""
                               ><button class="btn btn-white btn-outlined f-16">
                                    Discover Now
                                </button></a
                            >
                        </div>
                        <div
                            class="d-flex align-items-center justify-content-center support-content"
                            >
                            <p class="f-14 pr-16">The ReCotton Tee</p>
                            <a class="f-14 pl-16" href="">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>

        <div class="container container--collections pt-64 pb-64 pl-48 pr-48">
            <div
                class="d-flex justify-between align-center pb-48 header--collections"
                >

                <p class="f-28 weight-500 title--collections">Season Collection</p>
                <div class="d-flex justify-center align-center swiper--options">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div class="swiper swiper--collection">
                <div class="swiper-wrapper">
                    <%
                        List<Product> list = (List<Product>) request.getAttribute("newpro");
                        if (list != null)
                            for (Product i : list) {
                    %>

                    <a href="/btl_web/product?id=<%=i.getId()%>">
                        <div class="swiper-slide">
                            <div class="card--item">
                                <img
                                    src="<%=i.getImage()%>"
                                    />
                                <div class="d-flex justify-between align-center content--card">
                                    <div class="left--card">
                                        <p class="f-20 pb-4"><%=i.getTitle()%></p>
                                        <p class="f-14"><%=i.getPrice()%></p>
                                    </div>
                                    <a
                                        href="/btl_web/product?id=<%=i.getId()%>"
                                        class="d-flex justify-center align-center access--card"
                                        >
                                        <i class="fal fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <%
                            }
                        %>

                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="container pt-64 pb-64 container--items">
            <div class="text-center d-flex justify-center align-center items--header">
                <p class="f-28">You are in</p>
                <div class="pl-12 content--select">
                    <div class="select--content d-flex align-center justify-between">
                        <p class="f-18 text--select">Best Seller</p>
                        <i class="fal fa-angle-down ml-10"></i>
                    </div>
                    <ul id="list--options"></ul>
                </div>
            </div>
            <div class="d-grid grid-col-4 gap-16 pt-40 list--products">
                <%
                    List<Product> bestList = (List<Product>) request.getAttribute("bestsell");
                    if (bestList != null)
                        for (Product p : bestList) {
                %>
                <div class="single--product">
                    <div class="d-block image--product">
                        <img
                            src="<%= p.getImage()%>"
                            alt=""
                            />
                        <ul class="d-flex justify-center align-center options--product">
                            <!--                            <li data-tooltip="Add to wishlist">
                                                            <i class="far fa-star"></i>
                                                        </li>
                                                        <li data-tooltip="Select options">
                                                            <i class="far fa-shopping-bag"></i>
                                                        </li>-->
                            <a href="/btl_web/product?id=<%=p.getId()%>"><li data-tooltip="Xem chi tiết"><i class="far fa-eye"></i></li></a>
                            <!--                            <li data-tooltip="Compare"><i class="far fa-sort-alt"></i></li>-->
                        </ul>
                    </div>
                    <div class="pt-20 data--product">
                        <a class="pb-4 f-14" href="/btl_web/product?id=<%=p.getId()%>"><%= p.getTitle()%></a>
                        <p class="f-14"><%= p.getPrice()%> đ</p>
                    </div>
                </div>
                <%
                    }
                %>
                
            </div>
            <div class="pt-20 text-center">
                <a href="/btl_web/store" > <button class="btn btn-black text-uppercase">Watch more</button></a>
            </div>
        </div>
        <jsp:include page = "./component/footer.jsp" />
        <script src="./dist/index.js"></script>


    </body>
</html>