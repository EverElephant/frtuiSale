package com.elp.fruitSale.controller.introduce;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/introduce")
public class IntroduceController {
	@RequestMapping(method = RequestMethod.POST)
	public String introduce(){
		return "introduce/introduce-main";
		
	}
	@RequestMapping(value="mjy",method = RequestMethod.POST)
	public String mjy(){
		return "introduce/mjy";
		
	}
	@RequestMapping(value="mht",method = RequestMethod.POST)
	public String mht(){
		return "introduce/mht";
		
	}
	@RequestMapping(value="qc",method = RequestMethod.POST)
	public String qc(){
		return "introduce/qc";
		
	}
}
