package com.example.controller;

import com.example.domain.Student;
import com.example.domain.StudentCourse;
import com.example.mapper.StudentCourseMapper;
import com.example.mapper.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/student")
public class StudentController {

//    @Autowired(required = false)
//    StudentMapper studentMapper;

    @Autowired
    public StudentMapper studentMapper;
//    @GetMapping("/{id}")
//    public Student getById(@PathVariable Integer id){
//        Student student = studentMapper.selectByPrimaryKey(id);
//        return student;
//    }

    //  学生登录
    @PostMapping("/login")
    public Student login(@RequestBody Student student){
        student=studentMapper.findByUsernameAndPassword(student.getUsername(), student.getPassword());
//        System.out.print(student+"\n");
        return student;
    }
}
