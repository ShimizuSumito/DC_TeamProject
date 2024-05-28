package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Data.UserDatabase;
import com.example.demo.Interface.UserDatabaseInterface;

@Repository
public interface ClothupUserDatabaseRepository extends JpaRepository<UserDatabase, String>  {

	UserDatabaseInterface findByMailaddress(String mailaddress);

}
