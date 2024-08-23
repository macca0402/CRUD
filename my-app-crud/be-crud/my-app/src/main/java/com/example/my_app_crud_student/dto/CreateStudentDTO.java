package com.example.my_app_crud_student.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateStudentDTO {

    private Long studentId;

    @NotBlank(message = "Name of the student is empty.")
    private String nameStudent;

    private String addressStudent;

    @NotNull(message = "Mark is empty")
    private Float mark;

    private Long idAcademicPerformance;
}