<%-- 
    Document   : register
    Created on : May 16, 2022, 11:25:02 PM
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
    <div class="container container-form pt-64">
      <div class="title--form text-center pt-64 pb-64">
        <p class="f-32 pb-16">Register</p>
        <ul
          class="d-flex justify-center align-center pt-16 f-14 breadcrumb--items"
        >
          <li><a href="/">Home <i class="fal fa-angle-right"></i></a></li>
          <li><a href="/register">Create Account</a></li>
        </ul>
      </div>
      <div class="form--group container--login">
          <h3>${requestScope.error}</h3>
          <form method="post" action ="register" class="form-control">
          <h5>Register</h5>
          <div class="d-grid gap-12">
            <div class="form-group">
              <input
                data-validate="required"
                type="text"
                placeholder="First Name"
                required
                name ="firstName"
              />
            </div>
            <div class="form-group">
              <input
                data-validate="name"
                type="text"
                placeholder="Last Name"
                required
                name ="lastName"
              />
            </div>
            <div class="form-group">
              <input
                data-validate="email"
                type="text"
                placeholder="Email"
                required
                name ="email"
              />
            </div>
            <div class="form-group">
              <input
                data-validate="password"
                type="password"
                placeholder="Password"
                required
                name="password"
              />
              <i class="far fa-eye"></i>
            </div>
            <p class="help-block f-14 pt-10 pb-10">
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </p>
            <button type="submit" class="btn btn-black">Register</button>
            <button type="button" class="btn btn-outlined">Login</button>
          </div>
        </form>
      </div>
    </div>
        <jsp:include page = "./component/footer.jsp" />
    <script src="./dist/auth.js"></script>
    </body>
</html>
