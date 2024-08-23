package com.example.my_app_crud_student.repository;

import com.example.my_app_crud_student.dto.IAcademicPerformanceDTO;
import com.example.my_app_crud_student.entity.AcademicPerformance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAcademicPerformanceRepository extends JpaRepository<AcademicPerformance,Long> {

    @Query(value = "SELECT * FROM academic_performance",nativeQuery = true)
    List<IAcademicPerformanceDTO> findAllAcademicPerformance();
}
