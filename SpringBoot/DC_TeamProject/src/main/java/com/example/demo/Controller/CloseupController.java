package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Interface.ClotersInterface;
import com.example.demo.Interface.UserDatabaseInterface;
import com.example.demo.Service.ClothupService;

@RestController
public class CloseupController {
	@Autowired
	private ClothupService service;
	
	@GetMapping("/GetUser")
	@CrossOrigin
	public List<? extends UserDatabaseInterface> GetUser()
	{
		return null;
	}
	
	@GetMapping("/GetCloters")
	@CrossOrigin
	public List<? extends ClotersInterface> GetCloters()
	{
		return null;
	}
}
