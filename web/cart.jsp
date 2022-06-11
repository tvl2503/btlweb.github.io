<%-- 
    Document   : cart
    Created on : Jun 11, 2022, 9:08:05 PM
    Author     : Linh Tran Vo
--%>

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
                <div class="cart__body">
                    <div class="cart__item-product">
                        <div class="cart__product-img">
                            <img src="https://cdn.shopify.com/s/files/1/0595/7291/2305/products/40_c5a79318-cbbf-4f96-a1cf-5eef0009e9f5_180x.jpg?v=1629630711" alt=""/>
                        </div>
                        <div class="cart__product-info">
                            <div class="cart__product-title"><a href="#">
                                    Trainers Shoes
                                </a></div>
                            <p><span>Color</span>:Gray</p>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div class="cart__item-price">
                        <p>$14.00</p>
                    </div>
                    <div class="cart__item-quantity">
                        <button id ="jsSub" class="cart__sunNum" onclick ="tru()">-</button>
                        <span class="cart__numPr" id ="jsNum">1</span>
                        <button id="jsPlus" class="cart__plusNum" onclick ="plus()">+</button>
                    </div>
                    <div class="cart__item-total">
                        <p>$14.00</p>
                    </div>
                </div>
                <div class="cart__checkout">
                    <div class="cart__checkout__subtotal">
                      <span>Tổng tiền</span>
                      <span>$14.00</span>
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
