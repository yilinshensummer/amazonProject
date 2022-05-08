package com.yilin.restaurant.model;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;


import java.util.List;

public interface RestaurantRepo extends CrudRepository<Restaurant,Long>, JpaSpecificationExecutor{
    Page<Restaurant> findByAddressLike(String name, Pageable pageble);

    @Query("select u from Restaurant u where lower(u.name) like lower(concat('%',?1,'%'))")
    public List<Restaurant> findByNameFree(String name);
}


