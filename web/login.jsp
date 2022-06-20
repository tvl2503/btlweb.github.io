<%-- 
    Document   : login
    Created on : May 16, 2022, 10:30:59 AM
    Author     : Linh Tran Vo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
         <link rel="stylesheet" href="./css/index.css" />
          <link
      rel="stylesheet"
      href="https://kit-pro.fontawesome.com/releases/v5.12.0/css/pro.min.css"
    />
    </head>
    <body>
        
        <%
            if(session.getAttribute("account") != null){
                response.sendRedirect("/btl_web");
            }
        %>
        <div id="navigation">
             <jsp:include page = "./component/header.jsp" />
        </div>
    <div class="container container-form pt-64">
      <div class="title--form text-center pt-64 pb-64">
        <p class="f-32">Đăng nhập</p>
        <ul
          class="d-flex justify-center align-center pt-32 f-14 breadcrumb--items"
        >
          <li>Trang chủ <i class="fal fa-angle-right"></i></li>
          <li>Tài khoản</li>
        </ul>
      </div>
      <div class="d-grid grid-col-2 form--group gap-64 container--login">
          <form method ="post" action="login" class="form-control">
          <h5>Đăng nhập</h5>
          <h3>${requestScope.error}</h3>
          <div class="d-grid gap-12">
            <div class="form-group">
              <input
                data-validate="email"
                type="text"
                placeholder="Email"
                required
                name ="username"
              />
            </div>
            <div class="form-group">
              <input
                data-validate="password"
                type="password"
                placeholder="Password"
                name ="password"
                required
              />
              <i class="far fa-eye"></i>
            </div>
            <a class="f-14 pt-8 pb-8" href="#">Quên mật khẩu?</a>
            <button type="submit" class="btn btn-black">Đăng nhập</button>
          </div>
        </form>
        <div class="register--container">
          <h5>Khách hàng mới</h5>
          <p class="pb-24">
            Đăng ký để nhận mã giảm giá sớm cùng với các sản phẩm mới, 
            xu hướng và chương trình khuyến mãi phù hợp. 
            Để chọn không tham gia, hãy nhấp vào hủy đăng ký trong email của chúng tôi.
          </p>
          <a href="/btl_web/register.jsp"><button class="btn btn-black">Đăng ký</button></a>
        </div>
      </div>
    </div>
       <jsp:include page = "./component/footer.jsp" />

    <script src="./dist/auth.js"></script>
    </body>
</html>
