package com.example.domain;

import java.util.Date;
import lombok.Data;

@Data
public class Call {
    /**
    * 编号
    */
    private Integer id;

    /**
    * 课程编号
    */
    private Integer course_id;

    /**
    * 坐标经度
    */
    private Double latitude;

    /**
    * 坐标纬度
    */
    private Double longitude;

    /**
    * 创建时间
    */
    private Date createTime;

    /**
    * 更新时间
    */
    private Date updateTime;
}