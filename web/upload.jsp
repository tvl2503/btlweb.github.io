<%-- 
    Document   : upload.jsp
    Created on : May 29, 2022, 7:39:31 PM
    Author     : hoanganh0722
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Upload Page</title>
    <link rel="stylesheet" href="./css/index.css" />
    <link
      rel="stylesheet"
      href="https://kit-pro.fontawesome.com/releases/v5.12.0/css/pro.min.css"
    />
  </head>
  <body>
      <%
          if (session.getAttribute("account") == null) {
            response.sendRedirect("login.jsp");
          }
      %>
      <div id="navigation">
          <jsp:include page = "./component/header.jsp"></jsp:include>
      </div>
    <form class="container layout--top d-flex flex-column align-center justify-center form-upload" method="post" action="upload">
      <div class="upload-container pl-16 pr-16 pt-32 pb-32 w-100">
        <div class="form-control">
          <input
            id="title"
            class="w-100"
            type="text"
            name="title"
            required
            placeholder="Tiêu đề sản phẩm"
          />
        </div>
        <div class="form-control">
          <textarea
            id="description"
            class="w-100"
            type="text"
            name="description"
            required
            placeholder="Mô tả sản phẩm"
            rows="4"
          ></textarea>
        </div>
        <div class="form-control">
          <input id="old-price" class="w-100" type="number" name="oldPrice" placeholder="Giá gốc">
        </div>
        <div class="form-control">
          <input
            id="price"
            class="w-100"
            type="number"
            name="price"
            required
            placeholder="Giá hiện tại"
          />
        </div>
        <div class="form-control">
          <input type="text" name="url" id="url">
          <div class="box-upload f-14 d-flex align-center justify-center">
            Ấn để tải lên ảnh
          </div>
          <input
            id="upload-file"
            multiple="false"
            accept="image/*"
            class="w-100"
            type="file"
            name="image-url"
            required
            placeholder="Ảnh"
          />
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-submit btn-submit-form">Hoàn thành</button>
        </div>
      </div>
    <% if (request.getAttribute("success") != null) { %>
       <p class="success-message">${requestScope.success}</p>
    <% } %>
    <% if (request.getAttribute("error") != null) { %>
       <p class="error-message">${requestScope.error}</p>
    <% } %>
    </form>
     <jsp:include page = "./component/footer.jsp" />
    <script src="./dist/upload.js"></script>
  </body>
</html>