package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Data.Timeline;

@Repository
public interface ClothupTimelineRepository extends JpaRepository<Timeline,Integer>{

	List<Timeline> findByLocation(String location);

	List<Timeline> findBySituation(String situation);

	List<Timeline> findById(int id);

}
