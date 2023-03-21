package com.example.controller;

import com.example.domain.StudentAndCourse;
import com.example.domain.TeacherAndStudent;
import com.example.mapper.StudentCourseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mycourse")
public class StudentAndCourseController {
    @Autowired
    StudentCourseMapper studentCourseMapper;

    /**
     * 根据学生ID查询学生课程
     */
    @GetMapping("/{studentId}")
    public List<StudentAndCourse> mine(@PathVariable Integer studentId){
        List<StudentAndCourse> studentCourse = studentCourseMapper.listAllByStudentId(studentId);
//        System.out.println(studentCourse+"\n");
        return studentCourse;
    }

    /**
     *  根据教师ID查询课程下所有学生
     */
    @GetMapping("/teacher/{teacherId}")
    public List<TeacherAndStudent> studentList(@PathVariable Integer teacherId){
        List<TeacherAndStudent> studentList=studentCourseMapper.listAllByTeacherId(teacherId);
//        System.out.println(studentList+"/n");
        return studentList;
    }
}
