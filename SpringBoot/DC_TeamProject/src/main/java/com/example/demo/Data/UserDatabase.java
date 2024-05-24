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
	public String mailAddress;
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
}
