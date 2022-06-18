<%-- 
    Document   : cart
    Created on : Jun 11, 2022, 9:08:05 PM
    Author     : Linh Tran Vo
--%>

<%@page import="model.Cart"%>
<%@page import="java.util.List"%>
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
        <div class="container container--form pt-64">
            <div class="title--form text-center pt-64 pb-64">
                <p class="f-32">Cart</p>
                <ul
                    class="d-flex justify-center align-center pt-32 f-14 breadcrumb--items title--breadcrumb"
                    >
                    <li>Home <i class="fal fa-angle-right"></i></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        <div class="cart">
            <div class="container">
                <div class="cart__menu">
                    <div class="cart__product">Product</div>
                    <div class="cart__price">Price</div>
                    <div class="cart__quantity">Quantity</div>
                    <div class="cart__total">Total</div>
                </div>
                <%
                    int total = 0;
                    List<Cart> list = (List<Cart>) request.getAttribute("data");
                    if (list != null) {
                        for (Cart i : list) {

                %>
                <div class="cart__body">
                    <div class="cart__item-product">
                        <div class="cart__product-img">
                            <img src="<%=i.getProduct().getImage()%>" alt=""/>
                        </div>
                        <div class="cart__product-info">
                            <div class="cart__product-title"><a href="/btl_web/product?id=<%=i.getProduct().getId()%>">
                                    <%=i.getProduct().getTitle()%>
                                </a></div>
                           
                            <form action="process" method="post">
                                <input type="hidden" name ="id_remove" value ="<%=i.getProduct().getId()%>"/>
                                <button><input type="submit" value = "Remove"/></button>
                            </form>
                        </div>
                    </div>
                    <div class="cart__item-price">
                        <p><%=i.getProduct().getPrice()%></p>
                    </div>
                    <div class="cart__item-quantity">
                        <button id ="jsSub" class="cart__sunNum" ><a href="process?num=-1&id=<%= i.getProduct().getId()%>"> -</a></button>
                        <span class="cart__numPr" id ="jsNum"><%=i.getQuantity()%></span>
                        <button id="jsPlus" class="cart__plusNum" ><a href="process?num=1&id=<%= i.getProduct().getId()%>"> +</a></button>
                    </div>
                    <div class="cart__item-total">
                        <p><%=i.getProduct().getPrice() * i.getQuantity()%></p>
                        <% total +=  i.getProduct().getPrice() * i.getQuantity();%>
                    </div>
                </div>
                <%}
                    }%>
                <div class="cart__checkout">
                    <div class="cart__checkout__subtotal">
                        <span>Tổng tiền</span>
                        <span><%=total%></span>
                    </div>
                    <div class="cart__checkout__btn">
                        <button>Thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <jsp:include page = "./component/footer.jsp" />
    <script>
        const tru = () => {
            let input = document.getElementById("jsNum");
            let num = Number.parseInt(input.innerText);
            if (num < 2) {
                input.textContent = 1;
            } else {
                input.textContent = num - 1;
            }

            num--;
        };

        const plus = () => {
            let input = document.getElementById("jsNum");
            let num = Number.parseInt(input.innerText);
            input.textContent = num + 1;
            num++;
        };
    </script>
</body>
</html>
