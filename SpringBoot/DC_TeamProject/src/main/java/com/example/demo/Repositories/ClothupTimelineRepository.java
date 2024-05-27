package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Data.Timeline;

public interface ClothupTimelineRepository extends JpaRepository<Timeline,String>{

	List<Timeline> findByLocation(String location);

	List<Timeline> findBySituation(String situation);

	List<Timeline> findById(int id);

}
