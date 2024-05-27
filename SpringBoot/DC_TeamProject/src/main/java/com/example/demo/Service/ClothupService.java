package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Data.Clothes;
import com.example.demo.Interface.UserDatabaseInterface;
import com.example.demo.Repositories.ClothupClothesRepository;
import com.example.demo.Repositories.ClothupUserDatabaseRepository;

@Service
public class ClothupService {
	@Autowired
	private ClothupUserDatabaseRepository userDatabaseRepository;
	@Autowired
	private ClothupClothesRepository clothesRepository;
	public List<Clothes> GetClothes(String mailAddress) {
		// TODO 自動生成されたメソッド・スタブ
		return clothesRepository.findByMailaddress(mailAddress);
	}
	public List<? extends UserDatabaseInterface> GetUserData() {
		// TODO 自動生成されたメソッド・スタブ
		return userDatabaseRepository.findAll();
	}
}
