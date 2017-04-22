package com.elp.fruitSale.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper
public interface BuyMapper {	
	public List<HashMap<String,Object>> queryOrder(HashMap<String, Object> param);
}
