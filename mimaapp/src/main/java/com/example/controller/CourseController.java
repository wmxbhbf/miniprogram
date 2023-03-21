package com.example.controller;

import com.example.domain.Course;
import com.example.mapper.CourseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/course")
public class CourseController {
    @Autowired
    CourseMapper courseMapper;
    // 查询全部课程
    @GetMapping("")
    public List<Course> findByAll(){
        List<Course> courses = courseMapper.listByAll();
        return courses;
    }
    // 教师课程
    @GetMapping("/{teacherId}")
    public List<Course> findByTeacherId(@PathVariable Integer teacherId){
        List<Course> teacherdata = courseMapper.listAllByTeacherId(teacherId);
        return  teacherdata;
    }
}
