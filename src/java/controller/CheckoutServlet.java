/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import dal.CartDAO;
import dal.OrderDAO;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import model.Cart;
import model.User;

/**
 *
 * @author Linh Tran Vo
 */
public class CheckoutServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet CheckoutServlet</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet CheckoutServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
         HttpSession session = request.getSession();
        User ad = (User)session.getAttribute("account");
        if(ad!=null){
        CartDAO cd = new CartDAO();
        List<Cart> list =  cd.getCart(ad.getId());
        System.out.println("user "+ad.getId());
        request.setAttribute("data", list);
        request.getRequestDispatcher("checkout.jsp").forward(request, response);
        }
        else{
             response.sendRedirect("login.jsp");
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       request.setCharacterEncoding("UTF-8");
       HttpSession session = request.getSession();
       User ad = (User)session.getAttribute("account");
       String phone = request.getParameter("phone");
       String name = request.getParameter("name");
       String address = request.getParameter("address");
       String note = request.getParameter("note");
       CartDAO cd = new CartDAO();
       float total = cd.totalMoney(ad.getId());
       OrderDAO od = new OrderDAO();
       od.addOrder(ad.getId(), phone, name, address, note, (int)total);
       List<Cart> list =  cd.getCart(ad.getId());
       cd.deleteCart(ad.getId());
        System.out.println(list.size());
       int orderId = od.getIdOrderByIdUser(ad.getId());
        System.out.println(orderId);
       for(Cart i: list){
           od.addOrderDetail(orderId,i.getProduct().getId(), i.getQuantity(), (int)(i.getProduct().getPrice()*i.getQuantity()));
       }
       response.sendRedirect("index");
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
