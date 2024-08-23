package com.example.my_app_crud_student.controller;

import com.example.my_app_crud_student.dto.IAcademicPerformanceDTO;
import com.example.my_app_crud_student.dto.IStudentDTO;
import com.example.my_app_crud_student.entity.AcademicPerformance;
import com.example.my_app_crud_student.service.IAcademicPerformanceService;
import com.example.my_app_crud_student.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/academicPerformance")
public class AcademicController {
    @Autowired
    private IAcademicPerformanceService academicPerformanceService;
    private static final String FETCH_ERROR_MESSAGE = "An error occurred while fetching notifications";
    @GetMapping("/list")
    public ResponseEntity<Object> findAllAcademicPerformance() {
        try {
            List<IAcademicPerformanceDTO> list =academicPerformanceService.getAll();
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(FETCH_ERROR_MESSAGE);
        }
    }

}
