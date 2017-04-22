package com.elp.fruitSale.controller.about;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/about_us")
public class AboutUsController {
	@RequestMapping(method = RequestMethod.POST)
	public String introduce(){
		return "about/aboutUs-main";
		
	}

}
