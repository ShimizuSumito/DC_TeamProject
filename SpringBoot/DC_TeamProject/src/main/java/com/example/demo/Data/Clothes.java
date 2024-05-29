package com.example.demo.Data;

import com.example.demo.Interface.ClothesInterface;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "clothes")
public class Clothes implements ClothesInterface{
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
    @Column
    public String location;
    @Column 
    public String situation;
    @Column
    public String color;
    @Column
    public String category;
    @Column
    @Lob
    public byte[] image;
    @Column
    public String mailaddress;
    @Column
    public int minTemperature;
    @Column
    public int maxTemperature;
    
    public int GetId()
    {
    	return id;
    }
    
    public void SetId(int id)
    {
    	this.id = id;
    }
    
    public String GetLocation()
    {
    	return location;
    }
    
    public void SetLocation(String location)
    {
    	this.location = location;
    }
    
    public String GetSituation()
    {
    	return situation;
    }
    
    public void SetSituatuion(String situation)
    {
    	this.situation = situation;
    }
    
    public String GetColor()
    {
    	return color;
    }
    
    public void SetColor(String color)
    {
    	this.color = color;
    }
    
    public String GetCategory()
    {
    	return category;
    }
    
    public void SetCategory(String category)
    {
    	this.category = category;
    }
    
    public byte[] GetImage()
    {
    	return image;
    }
    
    public void SetImage(byte[] image)
    {
    	this.image = image;
    }
    
    public String GetMailaddress()
    {
    	return mailaddress;
    }
    
    public void SetMailaddress(String mailaddress)
    {
    	this.mailaddress = mailaddress;
    }
    
    public int GetMinTemperature()
    {
    	return minTemperature;
    }
    
    public void SetMinTemperature(int minTemperature)
    {
    	this.minTemperature = minTemperature;
    }
    
    public int GetMaxTemperature()
    {
    	return maxTemperature;
    }
    
    public void SetMaxTemperature(int maxTemperature)
    {
    	this.maxTemperature = maxTemperature;
    }
}
