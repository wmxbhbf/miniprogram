package com.example.domain;

import lombok.Data;

@Data
public class StudentAndCourse {

    /**
     *
     */
    private Integer course_id;

    /**
     * 教师姓名
     */
    private String teacher_name;

    /**
     * 课程名称
     */
    private String name;

    /**
     * 课程代码
     */
    private String code;
}
