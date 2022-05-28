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
        String sql = "select * from Users where email=? and password=?";
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
    public User registerUser(String fisrtName, String lastName,String email, String password){
        String sql = "insert into Users(first_name, last_name, email, password) values(?, ? , ?, ?)";
        System.out.println(fisrtName + " " + lastName + " " + email + " " + password);
        try{
            PreparedStatement st = connection.prepareStatement(sql);
            st.setString(1, fisrtName);
            st.setString(2, lastName);
            st.setString(3, email);
            st.setString(4, password);
            st.executeUpdate();
            User ad = new User(email, password);
            System.out.println(ad);
            
            return ad;        
            
        }catch(SQLException e){
            System.out.println(e);
        }
        return null;
    }
}
