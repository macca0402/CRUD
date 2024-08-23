package com.example.my_app_crud_student.service.impl;

import com.example.my_app_crud_student.dto.IAcademicPerformanceDTO;
import com.example.my_app_crud_student.entity.AcademicPerformance;
import com.example.my_app_crud_student.repository.IAcademicPerformanceRepository;
import com.example.my_app_crud_student.service.IAcademicPerformanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AcademicPerformanceImpl implements IAcademicPerformanceService{
    @Autowired
    private IAcademicPerformanceRepository academicPerformanceRepository;


    @Override
    public List<IAcademicPerformanceDTO> getAll() {
        return academicPerformanceRepository.findAllAcademicPerformance();
    }
}
