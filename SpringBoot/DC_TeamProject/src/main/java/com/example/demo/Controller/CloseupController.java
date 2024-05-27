package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Data.Clothes;
import com.example.demo.Data.UserDatabase;
import com.example.demo.Interface.UserDatabaseInterface;
import com.example.demo.Service.ClothupService;

@RestController
public class CloseupController {
	@Autowired
	private ClothupService service;
	
	@GetMapping("/User/Get")
	@CrossOrigin
	public List<? extends UserDatabaseInterface> GetUser()
	{
		return service.GetUserData();
	}
	
	@PostMapping("User/Add")
	@CrossOrigin
	public boolean AddUser(UserDatabase newUser)
	{
		return service.AddUser(newUser);
	}

	@PostMapping("User/delete")
	@CrossOrigin
	public boolean DeleteUser(UserDatabase deleteUser)
	{
		return service.DeleteUser(deleteUser);
	}
	
	@PostMapping("User/Update")
	@CrossOrigin
	public boolean UpdateUser(UserDatabase updateUser)
	{
		return service.UpdateUser(updateUser);
	}
	
	@GetMapping("User/Find/{mailaddress}")
	@CrossOrigin
	public UserDatabaseInterface FindUser(@PathVariable String mailaddress)
	{
		return service.FindUser(mailaddress);
	}
	
	@GetMapping("/GetClothes/{mailaddress}")
	@CrossOrigin
	public List<Clothes> GetClothes(@PathVariable String mailaddress)
	{
		return service.GetClothes(mailaddress);
	}
}
