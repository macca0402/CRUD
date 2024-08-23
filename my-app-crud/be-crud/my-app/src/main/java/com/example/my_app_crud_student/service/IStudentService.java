package com.example.my_app_crud_student.service;

import com.example.my_app_crud_student.dto.CreateStudentDTO;
import com.example.my_app_crud_student.dto.IStudentDTO;
import java.util.List;

public interface IStudentService {
    List<IStudentDTO> getAll();
    void addStudent(String name, String address,Float mark,Long idAcademicPerformance);
    void deleteStudent(Long id);
    void updateStudent(CreateStudentDTO studentDTO);
    IStudentDTO findByStudentId(Long id);
}
