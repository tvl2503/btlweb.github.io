/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import model.User;

/**
 *
 * @author Linh Tran Vo
 */
public class UserDAO extends DBContext {
    public User check(String username, String password){
        String sql = "select * from customer where username=? and password=?";
        try{
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, username);
            st.setString(2, password);
            ResultSet rs = st.executeQuery();
            
            if(rs.next()){
                User ad = new User(username, password);
                System.out.println(ad);
                return ad;        
            }
        }catch(SQLException e){
            System.out.println(e);
        }
         
        return null;
    }
    public User registerUser(String username, String password){
        String sql = "insert into customer values(username=? and password=?)";
        try{
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, username);
            st.setString(2, password);
            ResultSet rs = st.executeQuery();
            
            User ad = new User(username, password);
            System.out.println(ad);
            
            return ad;        
            
        }catch(SQLException e){
            System.out.println(e);
        }
        return null;
    }
}
