package com.example.controller;

import com.example.domain.Call;
import com.example.domain.CallAndSign;
import com.example.mapper.CallMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/select")
public class CallAndSignController {
    @Autowired
    CallMapper callMapper;
    /**
     * 根据课程ID查询所有学生的签到记录
     */
    @GetMapping("/{course_id}")
    public List<CallAndSign> selectAll(@PathVariable Integer course_id){
        List<CallAndSign> list=callMapper.listByAll(course_id);
        return list;
    }
}
