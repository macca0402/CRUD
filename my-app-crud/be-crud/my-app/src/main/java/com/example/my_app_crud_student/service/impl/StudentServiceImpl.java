package com.example.my_app_crud_student.service.impl;

import com.example.my_app_crud_student.dto.CreateStudentDTO;
import com.example.my_app_crud_student.dto.IStudentDTO;
import com.example.my_app_crud_student.repository.IStudentRepository;
import com.example.my_app_crud_student.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements IStudentService {
    @Autowired
    private IStudentRepository studentRepository;

    @Override
    public List<IStudentDTO> getAll() {
        return studentRepository.findAllStudent();
    }

    @Override
    public void addStudent(String name, String address, Float mark, Long idAcademicPerformance) {
        studentRepository.createStudent(name, address, mark, idAcademicPerformance);
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.deleteStudentById(id);
    }

    @Override
    public void updateStudent(CreateStudentDTO studentDTO) {
        studentRepository.updateStudent(studentDTO.getStudentId(), studentDTO.getNameStudent(), studentDTO.getAddressStudent(), studentDTO.getMark(), studentDTO.getIdAcademicPerformance());
    }

    @Override
    public IStudentDTO findByStudentId(Long id) {
        return studentRepository.findByStudentId(id);
    }
}
