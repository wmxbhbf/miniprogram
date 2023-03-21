package com.example.controller;

import com.example.domain.StudentCourse;
import com.example.mapper.StudentCourseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/add")
public class StudentCourseController {
    @Autowired
    public StudentCourseMapper studentCourseMapper;

    /**
     *添加课程
     */
    @PostMapping("/addCourse")
    public int insert(@RequestBody StudentCourse record){
        int add=studentCourseMapper.insertSelective(record);
        return add;
    }
}
