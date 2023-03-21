package com.example.controller;

import com.example.domain.Sign;
import com.example.mapper.SignMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sign")
public class SignController {
    @Autowired
    SignMapper signMapper;
    @PostMapping("/submit")
    public int insersign(@RequestBody Sign record){
        int sign = signMapper.insertSelective(record);
        return sign;
    }
    @PostMapping("/select/student")
    public List<Sign> select(@RequestBody Sign sign){
        List<Sign> signs = signMapper.listAllByNameAndStudent_id(sign.getName(), sign.getStudent_id());
        return signs;
    }
}
