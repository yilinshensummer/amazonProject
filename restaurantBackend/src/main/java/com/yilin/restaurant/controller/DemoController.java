package com.yilin.restaurant.controller;

import com.yilin.restaurant.model.DemoObject;
import com.yilin.restaurant.model.DemoObjectRepo;
import com.yilin.restaurant.model.Restaurant;
import com.yilin.restaurant.model.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.ws.rs.QueryParam;
import java.util.Scanner;

@RestController
public class DemoController {

    @Autowired
    RestaurantRepo repo;


    @GetMapping("/hello")
    public String index() {
        return "Greetings from Spring Boot!";
    }



    @GetMapping("/restaurants")

    public Iterable<Restaurant> search(@QueryParam("name")String name, @QueryParam("address")String address) {
        if (name != null) {
            return repo.findByNameFree(name);
        }
        if (address != null) {
            return repo.findByAddressLike(address, Pageable.ofSize(10)).getContent();
        }
        return repo.findAll();
    }

    @GetMapping("/restaurants/{id}")
    public Restaurant get(@PathVariable("id") long id) {
        try{
            return repo.findById(id).get();
        } catch(java.util.NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "entity not found"
            );
        }
    }

    @PostMapping("/restaurants/load")
    public void load(@RequestBody String csv){
        Scanner scanner = new Scanner(csv);
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            repo.save(Restaurant.toObject(line));
        }
        scanner.close();
    }

    @PostMapping("/restaurants/add")
    public Restaurant add(@RequestBody Restaurant rest) {
        repo.save(rest);
        return rest;
    }




}
