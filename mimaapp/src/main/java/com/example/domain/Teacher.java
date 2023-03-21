package com.example.domain;

import lombok.Data;

@Data
public class Teacher {
    /**
    * 教师编号
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
}