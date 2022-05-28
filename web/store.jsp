<%-- 
    Document   : products
    Created on : May 17, 2022, 9:05:00 AM
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
    </head>
    <body>
        <div id="navigation">
            
            <jsp:include page = "./component/header.jsp" />
        </div>

    <div class="d-flex justify-center align-center model--watch">
      <div class="d-grid grid-col-2 gap-16 shadow-sm item--watch">
        <div class="pointer f-20 close-btn">
          <i class="far fa-times"></i>
        </div>
        <div class="image--model">
          <img
            src="/images/static/2_1945f7f5-26d9-45aa-a1a5-f2f2f628ae8d_720x.jpeg"
            alt=""
          />
        </div>
        <div class="content--product">
          <a class="f-24 weight-500 title--product" href="">Rounded Glasses</a>
          <p class="f-14 pt-16 pb-10 price--product">$8.00</p>
          <p class="f-14 content mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quos.
          </p>
          <a class="f-14" href="">View Detail</a>
          <div class="w-100 mt-32">
            <button class="d-block w-100 btn btn-black">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container container--form pt-64">
      <div class="title--form text-center pt-64 pb-64">
        <p class="f-32">Shop</p>
        <ul
          class="d-flex justify-center align-center pt-32 f-14 breadcrumb--items title--breadcrumb"
        >
          <li>Home <i class="fal fa-angle-right"></i></li>
          <li>Shop</li>
        </ul>
      </div>
    </div>
    <div class="container container--collection">
      <div class="d-flex justify-between pb-48 collection--layout">
        <div class="side--bar">
          <h4 class="f-28 pb-32">Filters</h4>
          <div class="size--options pb-32">
            <p class="f-18 pb-16 weight-500">Size</p>
            <ul class="d-grid gap-12 grid--size">
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div>
          <div class="range--prices">
            <p class="f-18 pb-16 weight-500">Prices</p>
            <div class="slider-container">
              <div class="input--range">
                <input id="range" type="range" min="1" max="10000" value="1" />
                <span></span>
              </div>
              <p class="range--price pt-10 f-14">
                Range: <span class="range--output"></span>
              </p>
            </div>
          </div>
          <div class="brands-line pt-32">
            <p class="f-18 pb-16 weight-500">Brands</p>
            <ul class="d-flex gap-10 flex-wrap align-center list--items">
              <li>Retroline</li>
              <li>Brook</li>
            </ul>
          </div>
          <div class="brands-line pt-32">
            <p class="f-18 pb-16 weight-500">Tags</p>
            <ul class="d-flex gap-10 flex-wrap align-center list--items">
              <li>Fashion</li>
              <li>Hats</li>
            </ul>
          </div>
        </div>
        <div class="grid--products">
          <div class="d-flex justify-between align-center">
            <div
              class="d-flex justify-between align-center header--row pointer"
            >
              <p class="d-flex justify-between align-center value--sort">
                <span>Default</span> <i class="far fa-angle-down"></i>
              </p>
              <ul class="choose--sort"></ul>
            </div>
            <ul class="gap-16 list--style"></ul>
          </div>
          <div class="pt-30 d-grid gap-16 products--grid">
<!--            <div class="single--product">
              <div class="product--image">
                <img
                  src="./images/static/26a_7595032c-21fd-4085-8731-21fbf37d3d8a_900x.webp"
                  alt=""
                />
                <div
                  class="w-100 d-flex justify-center align-center option--button"
                >
                  <button class="btn btn-outlined">Select options</button>
                </div>
                <ul class="d-flex flex-column gap-16 list--icons">
                  <li><i class="far fa-star"></i></li>
                  <li class="open--layout"><i class="far fa-eye"></i></li>
                </ul>
              </div>
              <div class="content--product pt-20">
                <a class="f-16 weight-500 d-block item--name" href=""
                  >Wool-blend jacket</a
                >
                <div class="d-flex">
                  <p class="f-14">$33.00</p>
                  <p class="discount--price">$35.00</p>
                </div>
              </div>
            </div>-->
            <%
                List<Product> list = (List<Product>)request.getAttribute("data");
                if(list != null)
                for(Product i: list){
                %>
                <div class="single--product">
              <div class="product--image">
                <img
                  src="<%=i.getImage()%>"
                  alt=""
                />
                <div
                  class="w-100 d-flex justify-center align-center option--button"
                >
                  <button class="btn btn-outlined">Select options</button>
                </div>
              </div>
              <div class="content--product pt-20">
                <a class="f-16 weight-500 d-block item--name" href=""
                   ><%=i.getTitle()%></a
                >
                <div class="d-flex">
                  <p class="f-14"><%=i.getPrice()%></p>
                  <p class="discount--price"><%=i.getOldPrice()%></p>
                </div>
              </div>
            </div>
          </div>

            <%
                }
            %>
            
        </div>
      </div>
    </div>
    <script src="./dist/shop.js"></script>
    </body>
</html>
