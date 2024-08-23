package com.example.my_app_crud_student.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "academic_performance")
public class AcademicPerformance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_academic_performance")
    private Long academic_performance_id;

    @Column(name="name_academic_performance")
    private String name;

    @OneToMany(mappedBy = "academicPerformance")
    private List<Student> students;
}
