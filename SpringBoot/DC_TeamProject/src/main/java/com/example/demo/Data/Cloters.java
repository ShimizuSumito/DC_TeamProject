package com.example.demo.Data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "cloters")
public class Cloters {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
    @Column
    public String location;
    @Column
    public String temperature_range;
    @Column 
    public String situation;
    @Column
    public String color;
    @Column
    public String category;
    @Column
    @Lob
    public byte[] image;
}
