package com.example.controller;

import com.example.domain.Teacher;
import com.example.mapper.TeacherMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    public TeacherMapper teacherMapper;
    @PostMapping("/Login")
    public Teacher login(@RequestBody Teacher teacher){
        teacher=teacherMapper.findByUsernameAndPassword(teacher.getUsername(),teacher.getPassword());
//        System.out.println(teacher);
        return teacher;
    }
}
