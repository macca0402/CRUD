package com.example.my_app_crud_student.service;

import com.example.my_app_crud_student.dto.IAcademicPerformanceDTO;
import com.example.my_app_crud_student.entity.AcademicPerformance;

import java.util.List;

public interface IAcademicPerformanceService {
    List<IAcademicPerformanceDTO> getAll();
}
