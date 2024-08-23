package com.example.my_app_crud_student.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "name_student")
    @NotBlank(message = "Name of the student is empty.")
    private String nameStudent;

    @Column(name = "address")
    private String addressStudent;

    @Column(name = "mark")
    @Size(min = 0, max = 10)
    @NotNull(message = "Mark is empty")
    private float mark;

    @ManyToOne
    @JoinColumn(name = "id_academic_performance")
    private AcademicPerformance academicPerformance;

}
