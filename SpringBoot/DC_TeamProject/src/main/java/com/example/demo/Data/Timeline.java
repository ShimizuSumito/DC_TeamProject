package com.example.demo.Data;

import com.example.demo.Interface.TimelineInterface;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "timeline")
public class Timeline implements TimelineInterface{
	@Id
	@Column
	public String mailaddress;
	
	@Column
	public String text;
	
	@Column
	@Lob
	public byte[] image;
	
	@Column
	public String location;
	
	@Column
	public String situation;
	
	@Column
	public String nickname;
	
	@Column
	public int id;
	
	public String Getmailaddress()
	{
		return mailaddress;
	}
	
	public void SetMailaddress(String mailaddress)
	{
		this.mailaddress = mailaddress;
	}
	
	public String GetText()
	{
		return text;
	}
	
	public void SetText(String text)
	{
		this.text = text;
	}
	
	public byte[] GetImage()
	{
		return image;
	}
	
	public void SetImage(byte[] image)
	{
		this.image = image;
	}
	
	public String GetLocation()
	{
		return location;
	}
	
	public void SetLocation(String location)
	{
		this.location = location;
	}
	
	public String GetNickname()
	{
		return nickname;
	}
	
	public void SetNickname(String nickname)
	{
		this.nickname = nickname;
	}
	
	public int GetId()
	{
		return id;
	}
	
	public void SetId(int id)
	{
		this.id = id;
	}
}
