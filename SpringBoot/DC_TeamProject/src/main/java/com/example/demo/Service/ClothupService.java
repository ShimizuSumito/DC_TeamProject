package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repositories.ClothupClotersRepository;
import com.example.demo.Repositories.ClothupUserDatabaseRepository;

@Service
public class ClothupService {
	@Autowired
	private ClothupUserDatabaseRepository userDatabaseRepository;
	@Autowired
	private ClothupClotersRepository clothersRepository;
}
