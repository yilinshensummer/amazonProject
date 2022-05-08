package com.yilin.restaurant.model;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DemoObjectRepo extends CrudRepository<DemoObject,Long>, JpaSpecificationExecutor{
    Page<DemoObject> findByAddressLike(String name, Pageable pageble);

    @Query("select u from DemoObject u where lower(u.applicant) like lower(concat('%',?1,'%'))")
    public List<DemoObject> findByNameFree(String name);
}


