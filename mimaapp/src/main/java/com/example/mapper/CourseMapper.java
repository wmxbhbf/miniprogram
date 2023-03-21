package com.example.mapper;

import com.example.domain.Course;
import com.example.domain.Student;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CourseMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Course record);

    int insertSelective(Course record);

    Course selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Course record);

    int updateByPrimaryKey(Course record);

    /**
     *查询所有课程
     */
    List<Course> listByAll();

    /**
     *根据教师ID查询相关课程
     */
    List<Course> listAllByTeacherId(Integer teacherId);

    /**
     * 根据教师ID查询其课程下所有学生
     */

}