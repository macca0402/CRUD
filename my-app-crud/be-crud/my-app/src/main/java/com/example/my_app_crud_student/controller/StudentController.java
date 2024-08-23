package com.example.my_app_crud_student.controller;

import com.example.my_app_crud_student.dto.CreateStudentDTO;
import com.example.my_app_crud_student.dto.IStudentDTO;
import com.example.my_app_crud_student.dto.response.ErrorDetail;
import com.example.my_app_crud_student.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private IStudentService studentService;
    private static final String FETCH_ERROR_MESSAGE = "An error occurred while fetching notifications";

    @GetMapping("/list")
    public ResponseEntity<Object> findAllStudent() {
        try {
            List<IStudentDTO> studentDTO = studentService.getAll();
            return ResponseEntity.ok(studentDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(FETCH_ERROR_MESSAGE);

        }
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createStudent(@Validated @RequestBody CreateStudentDTO studentDTO, BindingResult bindingResult) {
        if (studentDTO == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        if (bindingResult.hasErrors()) {
            ErrorDetail errorDetail = new ErrorDetail("Validation errors");
            for (FieldError error : bindingResult.getFieldErrors()) {
                errorDetail.addError(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorDetail, HttpStatus.BAD_REQUEST);
        }
        studentService.addStudent(studentDTO.getNameStudent(), studentDTO.getAddressStudent(), studentDTO.getMark(), studentDTO.getIdAcademicPerformance());
        return new ResponseEntity<>("Student created successfully", HttpStatus.CREATED);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Object> deleteStudentById(@PathVariable("id") Long idStudent) {
        try {
            studentService.deleteStudent(idStudent);
            return new ResponseEntity<>("Student deleted successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(FETCH_ERROR_MESSAGE);
        }

    }

    @GetMapping("detail/{id}")
    public ResponseEntity<Object> detailStudent(@PathVariable("id") Long id) {
        try {
            IStudentDTO studentDTO=studentService.findByStudentId(id);
            return ResponseEntity.ok(studentDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(FETCH_ERROR_MESSAGE);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<Object> updateStudent(@Validated @RequestBody CreateStudentDTO studentDTO, BindingResult bindingResult) {
        if (studentDTO == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        if (bindingResult.hasErrors()) {
            ErrorDetail errorDetail = new ErrorDetail("Validation errors");
            for (FieldError error : bindingResult.getFieldErrors()) {
                errorDetail.addError(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorDetail, HttpStatus.BAD_REQUEST);
        }
        studentService.updateStudent(studentDTO);
        return new ResponseEntity<>("Student updated successfully", HttpStatus.CREATED);
    }
}
