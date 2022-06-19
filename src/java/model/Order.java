/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

import java.util.List;

/**
 *
 * @author ADMIN
 */
public class Order {
    
        private int id;
        private String phoneNum;
        private String firstName;
        private String address;
        private int total;
        private List<OrderDetail> listProduct;

    public Order() {
    }

    public Order(int id, String phoneNum, String firstName, String address, int total, List<OrderDetail> listProduct) {
        this.id = id;
        this.phoneNum = phoneNum;
        this.firstName = firstName;
        this.address = address;
        this.total = total;
        this.listProduct = listProduct;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public List<OrderDetail> getListProduct() {
        return listProduct;
    }

    public void setListProduct(List<OrderDetail> listProduct) {
        this.listProduct = listProduct;
    }
        
}
