package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Data.UserDatabase;

@Repository
public interface ClothupUserDatabaseRepository extends JpaRepository<UserDatabase,Integer>  {

}
