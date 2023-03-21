package com.example.domain;

import lombok.Data;

@Data
public class Course {
    /**
    * 课程编号
    */
    private Integer id;

    /**
    * 教师编号
    */
    private Integer teacherId;

    /**
     * 教师姓名
     */
    private String teacherName;

    /**
    * 课程名称
    */
    private String name;

    /**
    * 课程代码
    */
    private String code;
}