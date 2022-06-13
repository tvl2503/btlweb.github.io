<%-- 
    Document   : search
    Created on : Jun 13, 2022, 8:21:35 AM
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
        <div class="container body">
            <div class="search-title">
                <h3 class="text-center title-body-search">
                    Tìm thấy ${requestScope.number}  kết quả cho từ khóa "${requestScope.key}"
                </h3>
                <div class="f-14 d-flex align-center justify-center description-title">
                    <a href="/">Trang chủ</a>
                    <i class="fal fa-angle-right"></i>
                    <p>Tìm kiếm: "${requestScope.key}"</p>
                </div>
            </div>

            <div class="d-grid grid-col-4 gap-16 grid-container">
                <%
                    List<Product> list = (List<Product>) request.getAttribute("data");
                    if (list != null)
                        for (Product i : list) {
                %>
                <div class="single-product-search">
                    <div class="image-single-product">
                        <a href="">
                            <img
                                src="<%=i.getImage()%>"
                                />
                        </a>
                        <div class="d-flex align-center justify-center btn-add-container">
                            <button class="btn btn-black button-prod">Add</button>
                        </div>
                    </div>
                    <div class="description-single-product">
                        <a href=""><%=i.getTitle()%></a>
                        <p><%=i.getPrice()%></p>
                    </div>
                </div>
                <% }%>
            </div>
        </div>
        <jsp:include page = "./component/footer.jsp" />
        <script src="./dist/search.js"></script>
    </body>
</html>
