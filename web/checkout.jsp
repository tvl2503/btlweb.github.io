<%-- Document : checkout Created on : Jun 19, 2022, 7:21:06 AM Author : Linh
Tran Vo --%> <%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>JSP Page</title>
    <link rel="stylesheet" href="./css/page/checkout.css" />
    <link rel="stylesheet" href="./css/index.css" />
  </head>
  <body>
    <jsp:include page="./component/header.jsp" />
    <div class="content layout--top">
      <div class="content-left">
        <h3>Thanh toán đơn hàng</h3>
        <p class="header-content">Thông tin liên lạc</p>
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
          class="input-one"
          id="info-user"
        />
        <p class="header-content">Thông tin giao hàng</p>
        <div class="name d-block">
          <input
            id="username"
            type="text"
            placeholder="Name..."
            class="input-two w-100"
          />
        </div>
        <input
          type="text"
          id="address"
          placeholder="Địa chỉ..."
          class="input-one"
        />
        <input type="text" placeholder="Lưu ý..." class="input-one" />
        <button type="submit" class="submit-checkout">Submit checkout</button>
      </div>
      <div class="content-right">
        <div class="item">
          <div class="item-left">
            <img
              src="https://www.shophaiyen.com/wp-content/uploads/2018/09/M%E1%BA%B7t-sau-%C3%81o-thun-3D-Th%C3%A1i-Lan-1.jpg"
              alt="image"
              width="60px"
            />
            <div class="item-left-content">
              <strong>V-neck Sweater</strong>
              <p>Black</p>
            </div>
          </div>
          <p class="item-right">500000</p>
        </div>
        <hr />
        <!-- <div class="row">
          <input type="text" placeholder="Discount code" class="discount" />
          <button>Apply</button>
        </div>
        <hr /> -->
        <div class="row">
          <p>Subtotal</p>
          <p class="subtotal">500000</p>
        </div>
        <div class="row">
          <p>Shipping</p>
          <p>Calculated at next step</p>
        </div>
        <hr />
        <div class="row">
          <p>Total</p>
          <p class="total-price">5000000</p>
        </div>
      </div>
    </div>
    <jsp:include page="./component/footer.jsp" />
    <script src="./dist/checkout.js"></script>
  </body>
</html>
