package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Data.Clothes;

public interface ClothupClothesRepository extends JpaRepository<Clothes,Integer>{
	List<Clothes> findByMailaddress(String email);
}
