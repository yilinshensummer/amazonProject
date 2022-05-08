package com.yilin.restaurant.controller;

import com.yilin.restaurant.model.DemoObject;
import com.yilin.restaurant.model.DemoObjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.ws.rs.QueryParam;
import java.util.Scanner;

@RestController
public class DemoObjectController {


    @Autowired
    DemoObjectRepo repo;





    @GetMapping("/demo")

    public Iterable<DemoObject> search(@QueryParam("applicant")String name, @QueryParam("address")String address) {
        if (name != null) {
            return repo.findByNameFree(name);
        }
        if (address != null) {
            return repo.findByAddressLike(address, Pageable.ofSize(10)).getContent();
        }
        return repo.findAll();
    }

    @GetMapping("/demo/{id}")
    public DemoObject get(@PathVariable("id") long id) {
        try{
            return repo.findById(id).get();
        } catch(java.util.NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "entity not found"
            );
        }
    }

    @DeleteMapping("/demo/{id}")
    public void delete(@PathVariable("id") long id) {
        try{
            repo.deleteById(id);
        } catch(java.util.NoSuchElementException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "entity not found"
            );
        }
    }


    @PostMapping("/demo/load")
    public void loadDemo(@RequestBody String csv){
        Scanner scanner = new Scanner(csv);
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            try {
                DemoObject obj = DemoObject.toObject(line);
                repo.save(obj);
            } catch (Exception e)
            {
                System.err.println(line);
            }
        }
        scanner.close();
    }
    @PostMapping("/demo/add")
    public DemoObject add(@RequestBody DemoObject rest) {
        repo.save(rest);
        return rest;
    }




}
