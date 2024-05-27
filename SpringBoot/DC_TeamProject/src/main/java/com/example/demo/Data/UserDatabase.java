package com.example.demo.Data;

import com.example.demo.Interface.UserDatabaseInterface;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_data")
public class UserDatabase implements UserDatabaseInterface{
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public String mailaddress;
	@Column
	public String name;
    @Column
    public String gender;
    @Column
    public String generation;
    @Column
    public String password;
    @Column
    public String nickname;
    @Column
    public String region; 
    
    public String GetMailaddress()
    {
    	return mailaddress;
    }
    
    public void SetMailaddress(String mailAddress)
    {
    	this.mailaddress = mailAddress;
    }
    
    public String GetName()
    {
    	return name;
    }
    
    public void SetName(String name)
    {
    	this.name = name;
    }
    
    public String GetGender()
    {
    	return gender;
    }
    
    public void SetGender(String gender)
    {
    	this.gender = gender;
    }
    
    public String GetGeneratuion()
    {
    	return generation;
    }
    
    public void SetGeneration(String generation)
    {
    	this.generation = generation;
    }
    
    public String GetPassword()
    {
    	return password;
    }
    
    public void SetPassword(String password)
    {
    	this.password = password;
    }
    
    public String GetNickname()
    {
    	return nickname;
    }
    
    public void SetNickname(String nickname)
    {
    	this.nickname = nickname;
    }
    
    public String GetRegion()
    {
    	return region;
    }
    
    public void SetRegion(String region)
    {
    	this.region = region;
    }

}
