package com.example.domain;

import lombok.Data;

@Data
public class CallAndSign {
    /**
     * 签到编号
     */
    private Integer call_id;

    /**
     * 学生姓名
     */
    private String username;

    /**
     * 签到状态
     */
    private String state;
}
