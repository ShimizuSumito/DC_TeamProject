package com.example.demo.Data;

import com.example.demo.Interface.UserDatabaseInterface;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_data")
public class UserDatabase implements UserDatabaseInterface{
	@Column(name="name")
	private String name;
	@Id
    @Column(nullable = false, unique = true, name="mailaddress")
	private String mailaddress;
    @Column(name="gender")
    private String gender;
    @Column(name="generation")
    private String generation;
    @Column(name="password")
    private String password;
    @Column(name="nickname")
    private String nickname;
    @Column(name="region")
    private String region; 
    
    public UserDatabase() {}
    
    public String getMailaddress()
    {
    	return mailaddress;
    }
    
    public void setMailaddress(String mailAddress)
    {
    	this.mailaddress = mailAddress;
    }
    
    public String getName()
    {
    	return name;
    }
    
    public void setName(String name)
    {
    	this.name = name;
    }
    
    public String getGender()
    {
    	return gender;
    }
    
    public void setGender(String gender)
    {
    	this.gender = gender;
    }
    
    public String getGeneration()
    {
    	return generation;
    }
    
    public void setGeneration(String generation)
    {
    	this.generation = generation;
    }
    
    public String getPassword()
    {
    	return password;
    }
    
    public void setPassword(String password)
    {
    	this.password = password;
    }
    
    public String getNickname()
    {
    	return nickname;
    }
    
    public void setNickname(String nickname)
    {
    	this.nickname = nickname;
    }
    
    public String getRegion()
    {
    	return region;
    }
    
    public void setRegion(String region)
    {
    	this.region = region;
    }

}
