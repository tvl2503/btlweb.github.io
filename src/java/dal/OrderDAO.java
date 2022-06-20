/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Linh Tran Vo
 */
public class OrderDAO extends DBContext{
    public int getIdOrderByIdUser(int idUser){
        String sql = "select id from Orders where id_User = ?";
        try{
             PreparedStatement st = connection.prepareStatement(sql);
             st.setInt(1, idUser);
             ResultSet rs = st.executeQuery();
             if(rs.next()){
                 return rs.getInt("id");
             }
        }catch(SQLException e){
            System.out.println(e);
        }
        return 0;
    }
    public void addOrder(int idUser, String phone, String name, String address, String note, int total){
        String sql = "insert into Orders(phone, fullName, address, id_User, total, note) values(?,?,?,?,?, ?)";
        try{
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, phone);
            st.setString(2, name);
            st.setString(3, address);
            st.setInt(4, idUser);
            st.setInt(5, total);
            st.setString(6, note);
            st.executeUpdate();
        }catch(SQLException e){
            System.out.println(e);
        }
    }
    public void addOrderDetail(int idOrder, int idProduct, int quantity, int total){
        String sql = "insert into orderDetail(id_order, id_product, quantity, total) values(?,?,?,?)";
        try{
            PreparedStatement st = connection.prepareStatement(sql);
            st.setInt(1, idOrder);
            st.setInt(2, idProduct);
            st.setInt(3, quantity);
            st.setInt(4, total);
            st.executeUpdate();
        }catch(SQLException e){
            System.out.println(e);
        }
    }
}
