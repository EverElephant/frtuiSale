package com.elp.fruitSale.controller.homepage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/homepage")
public class HomePageController {
	@RequestMapping(method = RequestMethod.POST)
	public String homepage(){
		return "homepage/homepage-main";
		
	}

}
