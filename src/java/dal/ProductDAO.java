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
                 p.setId(rs.getInt("id"));
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
    public Product getProductByID(int id){
        String sql = "select * from Products where id=?";
        try{
            PreparedStatement st = connection.prepareStatement(sql);
            st.setInt(1, id);
            ResultSet rs = st.executeQuery();
            if(rs.next()){
                Product c = new Product();
                c.setId(rs.getInt("id"));
                c.setTitle(rs.getString("title"));
                c.setDescription(rs.getString("description"));
                c.setImage(rs.getString("image"));
                c.setPrice(rs.getFloat("price"));
                c.setOldPrice(rs.getFloat("priceOld"));
                return c;
            }
        }catch(SQLException e){
            System.out.println(e);
        }
        return null;
    }
    
    public Boolean createProduct(String title, String description, Float price, String imageURL, Float oldPrice) {
        String sql = "INSERT INTO Products (title, description, price, image, priceOld) VALUES (?, ?, ?, ?, ?)";
        try{
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, title);
            st.setString(2, description);
            st.setFloat(3, price);
            st.setString(4, imageURL);
            st.setFloat(5, oldPrice);
            st.executeUpdate();
            return true;
        }catch(SQLException error) {
            System.out.println(error);
            return false;
        }
    }
    public List<Product> getNewProduct(){
        List<Product> res = new ArrayList<>();
        String query = "select * from Products limit 8";
         try{
             PreparedStatement st = connection.prepareStatement(query);
             ResultSet rs = st.executeQuery();
             while(rs.next()){
                 Product p = new Product();
                 p.setId(rs.getInt("id"));
                 p.setTitle(rs.getString("title"));
                 p.setDescription(rs.getString("description"));
                 p.setImage(rs.getString("image"));
                 p.setPrice(rs.getFloat("price"));
                 p.setOldPrice(rs.getFloat("priceOld"));
                 res.add(p);
             }
             return res;
        }catch(SQLException e){
            System.out.println(e);
        }
         return null;
    }
    public List<Product> getBestSellProduct(){
        List<Product> res = new ArrayList<>();
        String query = "select * from Products where id > 3 limit 8";
         try{
             PreparedStatement st = connection.prepareStatement(query);
             ResultSet rs = st.executeQuery();
             while(rs.next()){
                 Product p = new Product();
                 p.setId(rs.getInt("id"));
                 p.setTitle(rs.getString("title"));
                 p.setDescription(rs.getString("description"));
                 p.setImage(rs.getString("image"));
                 p.setPrice(rs.getFloat("price"));
                 p.setOldPrice(rs.getFloat("priceOld"));
                 res.add(p);
             }
             return res;
        }catch(SQLException e){
            System.out.println(e);
        }
         return null;
    }
    public List<Product> SearchByName(String key){
        List<Product> list = new ArrayList<>();
        String sql = "Select * from Products where title like ?";
        try{
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, "%" + key + "%");
            ResultSet rs = st.executeQuery();
            while(rs.next()){
                Product p = new Product();
                 p.setId(rs.getInt("id"));
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
