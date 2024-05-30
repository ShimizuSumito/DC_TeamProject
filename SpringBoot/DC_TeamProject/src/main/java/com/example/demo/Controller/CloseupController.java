package com.example.demo.Controller;

import java.io.IOException;
import java.sql.Blob;
import java.util.Base64;
import java.util.List;

import javax.sql.rowset.serial.SerialBlob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Data.Clothes;
import com.example.demo.Data.TestEntity;
import com.example.demo.Data.Timeline;
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
	
	@GetMapping("/User/Find/{mailaddress}")
	@CrossOrigin
	public UserDatabase FindUser(@PathVariable String mailaddress)
	{
		return service.FindUser(mailaddress);
	}
	
	@PostMapping("/User/Add")
	@CrossOrigin
	public boolean AddUser(@RequestBody UserDatabase newUser)
	{
		return service.AddUser(newUser);
	}

	@PostMapping("/User/Delete")
	@CrossOrigin
	public boolean DeleteUser(@RequestBody UserDatabase deleteUser)
	{
		return service.DeleteUser(deleteUser);
	}
	
	@PostMapping("/User/Delete/{mailaddress}")
	@CrossOrigin
	public void DeleteUser(@PathVariable String mailaddress)
	{
		service.DeleteUser(mailaddress);
	}
	
	@PostMapping("/User/Update")
	@CrossOrigin
	public boolean UpdateUser(@RequestBody UserDatabase updateUser)
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
	public Clothes FindClothes(@PathVariable int id)
	{
		return service.FindClothes(id);
	}
	
	@GetMapping("/Clothes/Search/{temperature}/{location}/{situation}")
	@CrossOrigin
	public List<Clothes> SearchCloths(@PathVariable int temperature, @PathVariable String location, @PathVariable String situation)
	{
		return service.SearchCloths(temperature, location, situation);
	}
	
	@PostMapping("/Clothes/Add")
	@CrossOrigin
    public ResponseEntity<String> addClothes(
            @RequestParam(name="location") String location,
            @RequestParam(name="temperatureRange") String temperatureRange,
            @RequestParam(name="situation") String situation,
            @RequestParam(name="color") String color,
            @RequestParam(name="category") String category,
            @RequestPart(name="image") MultipartFile  base64Image, // Base64エンコードされた画像データを受け取る
            @RequestParam(name="mailaddress") String mailaddress) throws IOException{
        try {
            // Base64デコード
            //byte[] imageBytes = Base64.getDecoder().decode(base64Image);
        	byte[] imageData = base64Image.getBytes();
        	Blob imageBlob = new SerialBlob(imageData);
            Clothes addClothes = new Clothes();
            addClothes.setLocation(location);
            addClothes.setTemperatureRange(temperatureRange);
            addClothes.setSituation(situation);
            addClothes.setColor(color);
            addClothes.setCategory(category);
            // addClothes.setImage(imageBytes);
            addClothes.setImage(imageData);
            addClothes.setMailaddress(mailaddress);
            service.AddClothes(addClothes);
            System.out.println(addClothes.getImage().length);
            return new ResponseEntity<>("Success", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("エラー");
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
	
	@PostMapping("/Clothes/Add/{imageBase}")
	@CrossOrigin
	public boolean AddClothes(@RequestBody Clothes addClothes, @PathVariable String imageBase)
	{
		System.out.println(imageBase);
		addClothes.image = Base64.getDecoder().decode(imageBase);
		return service.AddClothes(addClothes);
	}
	
	@PostMapping("/Clothes/Add/Test")
	@CrossOrigin
	public boolean AddTest(@RequestBody TestEntity test)
	{
		System.out.println(test);
		return true;
	}
	
	@PostMapping("/Clothes/Delete")
	@CrossOrigin
	public boolean DeleteClothes(@RequestBody Clothes deleteClothes)
	{
		return service.DeleteClothes(deleteClothes);
	}
	
	@PostMapping("/Clothes/Delete/{id}")
	@CrossOrigin
	public boolean DeleteClothes(@PathVariable int id)
	{
		return service.DeleteClothes(id);
	}
	
	@PostMapping("/Clothes/Update")
	@CrossOrigin
	public boolean UpdateClothes(@RequestBody Clothes updateClothes)
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
	
	@PostMapping("/Timeline/Add")
	@CrossOrigin
	public boolean AddTimeline(@RequestBody Timeline addTimeline)
	{
		return service.AddTimeline(addTimeline);
	}
	
	@PostMapping("/Timeline/Delete")
	@CrossOrigin
	public boolean DeleteTimeline(@RequestBody Timeline deleteTimeline)
	{
		return service.DeleteTimeline(deleteTimeline);
	}
	
	@PostMapping("/Timeline/Update")
	@CrossOrigin
	public boolean UpdateTimeline(@RequestBody Timeline updateTimeline)
	{
		return service.UpdateTimeline(updateTimeline);
	}

	@PostMapping("/User/Login/{mailaddress}/{password}")
	@CrossOrigin
	public ResponseEntity<UserDatabase> findByUsernameAndPassword(@PathVariable String mailaddress, @PathVariable String password) {
	    UserDatabase users = service.findByAddressAndPassword(mailaddress, password);
	    
	    if(users == null) {
	    	System.out.println("ログイン失敗");
	        // ���[�U�[��������Ȃ��ꍇ��404�G���[���X�|���X��Ԃ�
	        return ResponseEntity.notFound().build();
	    } else {
	    	System.out.println("ログイン処理完了");
	        // ���[�U�[�����������ꍇ�ɂ͂��̏���Ԃ�
	        return ResponseEntity.ok(users);
	    }
	}
}
