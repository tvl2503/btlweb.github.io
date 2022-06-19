<%-- 
    Document   : product
    Created on : May 28, 2022, 8:04:24 PM
    Author     : Linh Tran Vo
--%>

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
        <div class="container pt-64">
      <div class="title--form text-center pt-64 pb-64">
        <ul
          class="d-flex justify-center align-center pt-32 f-14 breadcrumb--items title--breadcrumb"
        >
          <a href="/"
            ><li>Home <i class="fal fa-angle-right"></i></li
          ></a>
          <li>Shop</li>
        </ul>
      </div>
    </div>
    <%
        if(request.getAttribute("product")!= null){
            Product p = (Product)request.getAttribute("product");
        
        
    %>

    <div class="container container--main">
      <div class="w-100 container--swiper">
        <div class="swiper swiper-main">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="<%=p.getImage()%>" />
            </div>
            
          </div>
        </div>
     
      </div>
      <div class="product">
        <div class="product__icon"><i class="bx bx-star"></i></div>
        <h1 class="product__title"><%=p.getTitle()%></h1>
        <span class="product__price"><%=p.getPrice()%></span>
        <del class="product__priceG"><%=p.getOldPrice()%></del>
        <p class="product__quantity">Quantity</p>
        <form method = "get" action="add-to-cart">
        <div class="product__num">
            <input type ="text" style ="display: none;"  name="idProduct" value ="<%=p.getId()%>" />
            <button type ="button" id ="jsSub" class="product__sunNum" onclick ="tru()">-</button>
            <input  type ="number"  id ="jsNum" value ="1" name ="quantity" />
            <button type ="button" id="jsPlus" class="product__plusNum" onclick ="plus()">+</button>  
          
        </div>
             <button type ="submit" class="product__cart">Add to cart</button>
        </form>
        <h3>Buy more save more!</h3>
        <div class="product__sale">
          <div class="product__sale1">
            <div class="product__ifo">
              <h4>3 item(s) get 5% OFF</h4>
              <p>on each product</p>
            </div>
            <button>Add</button>
          </div>
          <div class="product__sale1">
            <div class="product__ifo">
              <h4>3 item(s) get 5% OFF</h4>
              <p>on each product</p>
            </div>
            <button>Add</button>
          </div>
        </div>
        <div class="product__visa">
          <img src="https://cdn.shopify.com/s/files/1/0595/7291/2305/files/Bitmap_360x_94aa583e-a410-4343-bcc1-b4a3505bc673_357x.jpg?v=1629655138" alt="">
          <h4>Guarantee safe & secure checkout</h4>
        </div>
      </div>
      </div>
    <%
        }
    %>
    </div>
     <jsp:include page = "./component/footer.jsp" />
    <script>
      const tru = () => {
          let input = document.getElementById("jsNum");
          let num =Number.parseInt( input.value);
          if(num < 2){
              input.value = 1;
          }
          else{
              input.value = num - 1;
          }
          
          num --;
      };
      const plus = () => {
          let input = document.getElementById("jsNum");
          let num =Number.parseInt( input.value);
          input.value = num + 1;
          num ++;
      };
    </script>
    <script src="./dist/product.js"></script>
    </body>
</html>
