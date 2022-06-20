<%-- Document : checkout Created on : Jun 19, 2022, 7:21:06 AM Author : Linh
Tran Vo --%> <%@page import="model.Cart"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
                <%
                    int total = 0;
                    List<Cart> list = (List<Cart>) request.getAttribute("data");
                    if (list != null) {
                        for (Cart i : list) {
                        total +=  i.getProduct().getPrice() * i.getQuantity();
                %>
                <div class="item">
                    <div class="item-left">
                        <img
                            src="<%=i.getProduct().getImage()%>"
                            alt="image"
                            width="60px"
                            />
                        <div class="item-left-content">
                            <strong><%=i.getProduct().getTitle()%></strong>
                        </div>
                    </div>
                    <p class="item-right"><%=i.getProduct().getPrice() * i.getQuantity()%></p>
                </div>
                <%
                    }
                    
                %>
                <hr />
                <!-- <div class="row">
                  <input type="text" placeholder="Discount code" class="discount" />
                  <button>Apply</button>
                </div>
                <hr /> -->
                <div class="row">
                    <p>Tổng tiền</p>
                    <p class="subtotal"><%=total%></p>
                </div>
                
                <div class="row">
                    <p>Phí ship</p>
                    <p>0đ</p>
                </div>
                <hr />
                <div class="row">
                    <p>Total</p>
                    <p class="total-price"><%=total%></p>
                </div>
                <%
                    }
                    
                %>
            </div>
        </div>
        <jsp:include page="./component/footer.jsp" />
        <script src="./dist/checkout.js"></script>
    </body>
</html>
