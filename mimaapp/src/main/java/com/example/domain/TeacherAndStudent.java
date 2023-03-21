package com.example.domain;

import lombok.Data;

@Data
public class TeacherAndStudent {

    /**
     * 教师ID
     */
    private Integer teacher_id;

    /**
     * 学生编号
     */
    private Integer student_id;

    /**
     * 姓名
     */
    private String username;

    /**
     * 专业
     */
    private String zhuanye;

    /**
     * 年级
     */
    private String nianji;

    /**
     * 班级
     */
    private String banji;
}
