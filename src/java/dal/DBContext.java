
package dal;

import java.sql.*;



public class DBContext {
    protected Connection connection;
    public DBContext()
    {
        try {
            // Edit URL , username, password to authenticate with your MS SQL Server
            Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/btweb?characterEncoding=utf8" ;
            String user = "root";
            String password = "volinh01";
            
            connection = DriverManager.getConnection(url, user, password);
        } catch (ClassNotFoundException e) {
            System.out.println(e);
        }catch(SQLException e){
            System.out.println(e);
        }
    }
}
