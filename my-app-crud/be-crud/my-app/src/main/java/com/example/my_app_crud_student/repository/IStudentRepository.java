package com.example.my_app_crud_student.repository;

import com.example.my_app_crud_student.dto.IStudentDTO;
import com.example.my_app_crud_student.entity.Student;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStudentRepository extends JpaRepository<Student, Long> {

    @Query(value = """
            select s.student_id, s.address, s.mark, s.name_student, a.name_academic_performance
            from student s
            join academic_performance a on a.id_academic_performance = s.id_academic_performance
            """, nativeQuery = true)
    List<IStudentDTO> findAllStudent();

    @Modifying
    @Transactional
    @Query(value = """
            insert into student(name_student, address, mark, id_academic_performance) 
            values (:nameStudent, :address, :mark, :idAcademicPerformance)
            """, nativeQuery = true)
    void createStudent(@Param("nameStudent") String name,
                       @Param("address") String address,
                       @Param("mark") Float mark,
                       @Param("idAcademicPerformance") Long idAcademicPerformance);

    @Modifying
    @Transactional
    @Query(value = """
            delete from student s 
            where s.student_id = :idStudent
            """, nativeQuery = true)
    void deleteStudentById(@Param("idStudent") Long idStudent);

    @Query(value = """
            select s.student_id, s.address, s.mark, s.name_student, a.name_academic_performance
            from student s
            join academic_performance a on a.id_academic_performance = s.id_academic_performance
            where s.student_id = :id;
            """, nativeQuery = true)
    IStudentDTO findByStudentId(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query(value = """
            update student s 
            set s.name_student = :nameStudent, s.address = :address, s.mark = :mark, 
                s.id_academic_performance = :idAcademicPerformance 
            where s.student_id = :idStudent
            """, nativeQuery = true)
    void updateStudent(@Param("idStudent") Long id,
                       @Param("nameStudent") String name,
                       @Param("address") String address,
                       @Param("mark") Float mark,
                       @Param("idAcademicPerformance") Long idAcademicPerformance);
}
