package com.example.domain;

import lombok.Data;

@Data
public class Student {
    /**
    * 学生编号
    */
    private Integer id;

    /**
     * 身份
     */
    private String role;

    /**
    * 姓名
    */
    private String username;

    /**
    * 密码
    */
    private String password;

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