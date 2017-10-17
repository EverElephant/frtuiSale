package com.elp.fruitSale.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface FruitMapper {	
	
	@Select("select * from product_price")
	List<HashMap<String, Object>> queryAllPrice();
	
	@Insert("insert into contact (name,tel,email,content) values (#{name},#{tel},#{email},#{content})")
	void insertContact(@Param("name") String name,@Param("tel") String tel,@Param("email") String email,@Param("content") String content);
}
