package com.example.mapper;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.BeforeClass;
import org.junit.Test;

public class StudentCourseMapperTest {
    private static StudentCourseMapper mapper;

    @BeforeClass
    public static void setUpMybatisDatabase() {
        SqlSessionFactory builder = new SqlSessionFactoryBuilder().build(StudentCourseMapperTest.class.getClassLoader().getResourceAsStream("mybatisTestConfiguration/StudentCourseMapperTestConfiguration.xml"));
        //you can use builder.openSession(false) to not commit to database
        mapper = builder.getConfiguration().getMapper(StudentCourseMapper.class, builder.openSession(true));
    }

    @Test
    public void testListAllByStudentId() {
        mapper.listAllByStudentId(2019101);
    }
}
