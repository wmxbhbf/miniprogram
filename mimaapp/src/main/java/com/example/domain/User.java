package com.example.domain;

import lombok.Data;

@Data
public class User {
    /**
    * 	
用户编号
    */
    private Integer id;

    /**
    * 角色
    */
    private String role;

    /**
    * 姓名
    */
    private String username;

    private String password;

    /**
    * 教师id
    */
    private Integer teacherId;

    /**
    * 学生id
    */
    private Integer studentId;
}