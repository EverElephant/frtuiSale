package com.elp.fruitSale.controller.buy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.elp.fruitSale.mapper.BuyMapper;

@Controller
@RequestMapping("/to_buy")
public class BuyController {
	
	@Autowired
	BuyMapper dao;
	
	@RequestMapping(method = RequestMethod.POST)
	public String homepage(){
		dao.findValue("kpi_001");
		return "buy/toBuy-main";
	}

}
