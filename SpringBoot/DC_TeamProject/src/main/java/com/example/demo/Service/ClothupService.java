package com.example.demo.Service;

import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Data.Clothes;
import com.example.demo.Data.Timeline;
import com.example.demo.Data.UserDatabase;
import com.example.demo.Interface.UserDatabaseInterface;
import com.example.demo.Repositories.ClothupClothesRepository;
import com.example.demo.Repositories.ClothupTimelineRepository;
import com.example.demo.Repositories.ClothupUserDatabaseRepository;

import jakarta.transaction.Transactional;

@Service
public class ClothupService {
	@Autowired
	private ClothupUserDatabaseRepository userDatabaseRepository;
	@Autowired
	private ClothupClothesRepository clothesRepository;
	@Autowired
	private ClothupTimelineRepository timelineRepository;
	public List<? extends UserDatabaseInterface> GetUserData() {
		// TODO 自動生成されたメソッド・スタブ
		return userDatabaseRepository.findAll();
	}
	
	@Transactional
	public boolean AddUser(UserDatabase newUser) {
		// TODO 自動生成されたメソッド・スタブ
		try 
		{
			System.out.println("AddUser");
			System.out.println(newUser.mailaddress);
			userDatabaseRepository.saveAndFlush(newUser);
			System.out.println("AddUser");
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}
	public boolean DeleteUser(UserDatabase deleteUser) {
		// TODO 自動生成されたメソッド・スタブ
		try
		{
			userDatabaseRepository.delete(deleteUser);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}
	public boolean UpdateUser(UserDatabase updateUser) {
		// TODO 自動生成されたメソッド・スタブ
		try
		{
			userDatabaseRepository.saveAndFlush(updateUser);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}
	public UserDatabase FindUser(String mailaddress) {
		// TODO 自動生成されたメソッド・スタブ
		return userDatabaseRepository.findByMailaddress(mailaddress);
	}
	public List<Clothes> GetClothes(String mailAddress) {
		// TODO 自動生成されたメソッド・スタブ
		return clothesRepository.findByMailaddress(mailAddress);
	}
	public Clothes FindClothes(int id) {
		return clothesRepository.findById(id);
	}
	public boolean AddClothes(Clothes addClothes) {
		// TODO 自動生成されたメソッド・スタブ
		try
		{
			clothesRepository.saveAndFlush(addClothes);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}
	public boolean DeleteClothes(Clothes deleteClothes) {
		// TODO 自動生成されたメソッド・スタブ
		try
		{
			clothesRepository.delete(deleteClothes);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}
	public boolean UpdateClothes(Clothes updateClothes) {
		// TODO 自動生成されたメソッド・スタブ
		try
		{
			clothesRepository.saveAndFlush(updateClothes);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}
	public List<Timeline> GetTimeline() {
		// TODO 自動生成されたメソッド・スタブ
		return timelineRepository.findAll();
	}
	public List<Timeline> FindLocationTimeline(String location) {
		// TODO 自動生成されたメソッド・スタブ
		return timelineRepository.findByLocation(location);
	}
	public List<Timeline> FindSituationTimeline(String situation) {
		// TODO 自動生成されたメソッド・スタブ
		return timelineRepository.findBySituation(situation);
	}
	public boolean AddTimeline(Timeline addTimeline) {
		// TODO 自動生成されたメソッド・スタブ
		try
		{
			timelineRepository.saveAndFlush(addTimeline);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}
	public boolean DeleteTimeline(Timeline deleteTimeline) {
		// TODO 自動生成されたメソッド・スタブ
		try
		{
			timelineRepository.delete(deleteTimeline);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}
	public boolean UpdateTimeline(Timeline updateTimeline) {
		// TODO 自動生成されたメソッド・スタブ
		try
		{
			timelineRepository.saveAndFlush(updateTimeline);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}
	public List<Timeline> FindIdTimeline(int id) {
		// TODO 自動生成されたメソッド・スタブ
		return timelineRepository.findById(id);
	}

	public UserDatabase findByAddressAndPassword(String address, String password) {
		// TODO 自動生成されたメソッド・スタブ
		return userDatabaseRepository.findByMailaddressAndPassword(address, password);
	}

	public List<Clothes> SearchCloths(int temperature, String location, String situation) {
		// TODO 自動生成されたメソッド・スタブ
		return null;
	}

	public void DeleteUser(String mailaddress) {
		// TODO 自動生成されたメソッド・スタブ
		UserDatabase user = userDatabaseRepository.findByMailaddress(mailaddress);
		userDatabaseRepository.delete(user);
		
	}
	public boolean DeleteClothes(int id) {
		// TODO 自動生成されたメソッド・スタブ
		try
		{
			Clothes clothes = clothesRepository.findById(id);
			clothesRepository.delete(clothes);
			return true;
		}
		catch(Exception e)
		{
			System.out.println(e);
			return false;
		}
	}    
	public byte[] resizeAndConvertToByteArray(MultipartFile file) throws IOException {
        // 画像の読み込み
        BufferedImage originalImage = ImageIO.read(file.getInputStream());

        // 縮小後のサイズを設定
        int newWidth = 500; // 例として幅を500ピクセルに設定
        int newHeight = (int) Math.round((double) originalImage.getHeight() / originalImage.getWidth() * newWidth);
        	
        // 画像の縮小
        BufferedImage resizedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_RGB);
        Graphics2D g = resizedImage.createGraphics();
        g.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
        g.drawImage(originalImage, 0, 0, newWidth, newHeight, null);
        g.dispose();

        // 縮小した画像をバイト配列に変換
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(resizedImage, "jpg", baos);
        baos.flush();
        byte[] byteArray = baos.toByteArray();
        baos.close();

        return byteArray;
    }
}
