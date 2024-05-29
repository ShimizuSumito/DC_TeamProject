package com.example.demo.Interface;

public interface ClothesInterface {
    public int GetId();
    
    public void SetId(int id);
    
    public String GetLocation();
    
    public void SetLocation(String location);
    
    public String GetSituation();
    
    public void SetSituatuion(String situation);
    
    public String GetColor();
    
    public void SetColor(String color);
    
    public String GetCategory();
    
    public void SetCategory(String category);
    
    public byte[] GetImage();
    
    public void SetImage(byte[] image);
    
    public String GetMailaddress();
    
    public void SetMailaddress(String mailaddress);
    
    public int GetMinTemperature();
    
    public void SetMinTemperature(int minTemperature);
    
    public int GetMaxTemperature();
    
    public void SetMaxTemperature(int maxTemperature);
}
