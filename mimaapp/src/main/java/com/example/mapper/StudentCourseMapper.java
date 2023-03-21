package com.example.mapper;

import com.example.domain.StudentAndCourse;
import com.example.domain.StudentCourse;
import com.example.domain.TeacherAndStudent;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface StudentCourseMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StudentCourse record);

    int insertSelective(StudentCourse record);

    StudentCourse selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StudentCourse record);

    int updateByPrimaryKey(StudentCourse record);

    /**
     *  根据学生ID查询所选课程
     */
    List<StudentAndCourse> listAllByStudentId(@Param("studentId") Integer studentId);
    /**
     *  根据教师ID查询课程下所有学生
     */
    List<TeacherAndStudent> listAllByTeacherId(@Param("teacherId") Integer teacherId);
}