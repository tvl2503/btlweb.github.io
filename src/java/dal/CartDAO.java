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
import model.Cart;
import model.Product;

/**
 *
 * @author Linh Tran Vo
 */
public class CartDAO extends DBContext {
    public List<Cart> getCart(int idUser){
        List<Cart> list = new ArrayList<>();
        String sql = "select * from products inner join Carts on Carts.id_product = products.id  where Carts.id_user = ?";
        try{
             PreparedStatement st = connection.prepareStatement(sql);
             st.setInt(1, idUser);
             ResultSet rs = st.executeQuery();
             
             while(rs.next()){
                 Cart c = new Cart();
                 Product p = new Product();
                 p.setId(rs.getInt("id"));
                 p.setTitle(rs.getString("title"));
                 p.setImage(rs.getString("image"));
                 p.setPrice(rs.getFloat("price"));
                 c.setProduct(p);
                 c.setQuantity(rs.getInt("quantity"));
                 list.add(c);
             }
             return list;
        }catch(SQLException e){
            System.out.println(e);
        }
        return null;
    }
}
