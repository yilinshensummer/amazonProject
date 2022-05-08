package com.yilin.restaurant.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Restaurant {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long  id;
    private String name;
    private String address;
    private String typesOfFood;

    public Restaurant() {
    }

    public Restaurant(long i, String name, String address, String typesOfFood) {
        this.id = i;
        this.name = name;
        this.address = address;
        this.typesOfFood = typesOfFood;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTypesOfFood() {
        return typesOfFood;
    }

    public void setTypesOfFood(String typesOfFood) {
        this.typesOfFood = typesOfFood;
    }

    public static Restaurant toObject(String line){
        Restaurant restaurant = new Restaurant();
        String[] ele = line.split(",");
        restaurant.setName(ele[0]);
        restaurant.setAddress(ele[1]);
        restaurant.setTypesOfFood(ele[2]);

        return restaurant;
    }
}
