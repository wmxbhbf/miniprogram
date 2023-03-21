package com.example.domain;

//import java.util.Date;
import java.sql.Date;
import lombok.Data;

@Data
public class Sign {
    /**
    * 签到记录编号
    */
    private Integer id;

    /**
    * 签到编号
    */
    private Integer call_id;

    /**
    * 课程名
    */
    private String name;

    /**
    * 学生编号
    */
    private Integer student_id;

    /**
     * 学生姓名
     */
    private String username;

    /**
    * 签到状态
    */
    private String state;

    /**
    * 创建时间
    */
    private Date createTime;

    /**
    * 更新时间
    */
    private Date updateTime;
}