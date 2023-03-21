package com.example.mapper;

import com.example.domain.Call;
import com.example.domain.CallAndSign;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CallMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Call record);

    int insertSelective(Call record);

    Call selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Call record);

    int updateByPrimaryKey(Call record);

    /**
     * 学生获取考勤位置信息
     */
    List<Call> listByCourseId(Integer course_id);

    /**
     * 根据课程ID查询考勤学生
     */
    List<CallAndSign> listByAll(@Param("course_id") Integer course_id);
}