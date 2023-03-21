package com.example.domain;

import lombok.Data;

@Data
public class StudentCourse {
    /**
    * 中间表编号
    */
    private Integer id;

    /**
    * 学生编号
    */
    private Integer studentId;

    /**
    * 课程
    */
    private Integer courseId;

    /**
     * 教师ID
     */
    private Integer teacherId;
}