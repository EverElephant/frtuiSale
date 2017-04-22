package com.elp.fruitSale.controller.contact;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/contact_us")
public class ContactUsController {
	@RequestMapping(method = RequestMethod.POST)
	public String introduce(){
		return "contact/contact-main";
		
	}
}
