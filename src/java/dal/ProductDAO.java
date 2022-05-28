/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import model.Product;

/**
 *
 * @author Linh Tran Vo
 */
public class ProductDAO extends DBContext{
    public List<Product> getProductALL(){
        List<Product> list = new ArrayList<>();
        String sql = "select * from Products";
        try{
             PreparedStatement st = connection.prepareStatement(sql);
             ResultSet rs = st.executeQuery();
             while(rs.next()){
                 Product p = new Product();
                 p.setTitle(rs.getString("title"));
                 p.setDescription(rs.getString("description"));
                 p.setImage(rs.getString("image"));
                 p.setPrice(rs.getFloat("price"));
                 p.setOldPrice(rs.getFloat("priceOld"));
                 list.add(p);
             }
             return list;
        }catch(SQLException e){
            System.out.println(e);
        }
        return null;
    }
}
