package com.yilin.restaurant.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class DemoObject {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;
    private String applicant;
    private String locationDescription;
    private String address;
    private String photo;
    private String foodItems;
    private Float latitude;
    private Float longitude;
    private String schedule;
    private String location;

    public String getApplicant() {
        return applicant;
    }

    public void setApplicant(String applicant) {
        this.applicant = applicant;
    }

    public String getLocationDescription() {
        return locationDescription;
    }

    public void setLocationDescription(String locationDescription) {
        this.locationDescription = locationDescription;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getFoodItems() {
        return foodItems;
    }

    public void setFoodItems(String foodItems) {
        this.foodItems = foodItems;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public static DemoObject toObject(String line){
        DemoObject restaurant = new DemoObject();
        String[] ele = line.split(",");
        restaurant.setApplicant(ele[0]);
        restaurant.setLocationDescription(ele[1]);
        restaurant.setAddress(ele[2]);
        restaurant.setPhoto(ele[3]);
        restaurant.setFoodItems(ele[4]);
        restaurant.setLatitude(Float.valueOf(ele[5]));
        restaurant.setLongitude(Float.valueOf(ele[6]));
        restaurant.setSchedule(ele[7]);
        restaurant.setLocation(ele[8]);

        return restaurant;
    }
}
