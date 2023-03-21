package com.example.controller;

import com.example.domain.Call;
import com.example.mapper.CallMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/call")
public class CallController {
    @Autowired
    CallMapper callMapper;

    /**
     * 教师提交考勤位置信息
     */
    @PostMapping("/submit")
    public int insertcall(@RequestBody Call record){
        int call=callMapper.insertSelective(record);
        return call;
    }
    /**
     * 学生获取考勤位置信息
     */
    @GetMapping("/getdata/{course_id}")
    public List<Call> select(@PathVariable Integer course_id){
        List<Call> place=callMapper.listByCourseId(course_id);
        return place;
    }

}
