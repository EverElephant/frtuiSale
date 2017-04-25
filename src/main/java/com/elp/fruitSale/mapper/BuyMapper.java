package com.elp.fruitSale.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface BuyMapper {	
	@Select("select * from test where kpi_code = #{kpiCode}")
	String findValue(@Param("kpiCode") String kpiCode);
	@Select("select * from product_price")
	List<HashMap<String, String>> queryAllPrice();
}
