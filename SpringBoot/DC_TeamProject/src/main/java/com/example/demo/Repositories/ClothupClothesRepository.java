package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Data.Clothes;
import com.example.demo.Interface.ClothesInterface;

public interface ClothupClothesRepository extends JpaRepository<Clothes,Integer>{
	List<Clothes> findByMailaddress(String email);

	public ClothesInterface findById(int id);

	List<Clothes> findByMinTemperatureLessThanEqualAndMaxTemperatureGreaterThanEqual(int temperature, int temperature2);
}
