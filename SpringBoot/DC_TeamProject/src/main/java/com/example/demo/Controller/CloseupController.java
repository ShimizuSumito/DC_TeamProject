package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Data.Clothes;
import com.example.demo.Data.Timeline;
import com.example.demo.Data.UserDatabase;
import com.example.demo.Interface.ClothesInterface;
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
	
	@GetMapping("User/Find/{mailaddress}")
	@CrossOrigin
	public UserDatabaseInterface FindUser(@PathVariable String mailaddress)
	{
		return service.FindUser(mailaddress);
	}
	
	@PostMapping("User/Add")
    @CrossOrigin
	public boolean AddUser(@RequestBody UserDatabase newUser)
	{
		System.out.println("AddUser");
		return service.AddUser(newUser);
	}

	@PostMapping("User/Delete")
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
	
	@GetMapping("/Clothes/Get/{mailaddress}")
	@CrossOrigin
	public List<Clothes> GetClothes(@PathVariable String mailaddress)
	{
		return service.GetClothes(mailaddress);
	}
	
	@GetMapping("/Clothes/Find/{id}")
	@CrossOrigin
	public ClothesInterface FindClothes(@PathVariable int id)
	{
		return service.FindClothes(id);
	}
	
	@PostMapping("/Clothes/Add")
	@CrossOrigin
	public boolean AddClothes(Clothes addClothes)
	{
		return service.AddClothes(addClothes);
	}
	
	@PostMapping("/Clothes/Delete")
	@CrossOrigin
	public boolean DeleteClothes(Clothes deleteClothes)
	{
		return service.DeleteClothes(deleteClothes);
	}
	
	@PostMapping("/Clothes/Update")
	@CrossOrigin
	public boolean UpdateClothes(Clothes updateClothes)
	{
		return service.UpdateClothes(updateClothes);
	}
	
	@GetMapping("/Timeline/Get")
	@CrossOrigin
	public List<Timeline> GetTimeline()
	{
		return service.GetTimeline();
	}
	
	@GetMapping("Timeline/Find/id/{id}")
	@CrossOrigin
	public List<Timeline> FindIdTimeline(@PathVariable int id)
	{
		return service.FindIdTimeline(id);
	}
	
	@GetMapping("/Timeline/Find/location/{location}")
	@CrossOrigin
	public List<Timeline> FindLocationTimeline(@PathVariable String location)
	{
		return service.FindLocationTimeline(location);
	}
	
	@GetMapping("/Timeline/Find/situation/{situation}")
	@CrossOrigin
	public List<Timeline> FindSituationTimeline(@PathVariable String situation)
	{
		return service.FindSituationTimeline(situation);
	}
	
	@PostMapping("Timeline/Add")
	@CrossOrigin
	public boolean AddTimeline(Timeline addTimeline)
	{
		return service.AddTimeline(addTimeline);
	}
	
	@PostMapping("Timeline/Delete")
	@CrossOrigin
	public boolean DeleteTimeline(Timeline deleteTimeline)
	{
		return service.DeleteTimeline(deleteTimeline);
	}
	
	@PostMapping("Timeline/Update")
	@CrossOrigin
	public boolean UpdateTimeline(Timeline updateTimeline)
	{
		return service.UpdateTimeline(updateTimeline);
	}
}
