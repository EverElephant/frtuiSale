package com.elp.fruitSale.controller.contact;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.elp.fruitSale.mapper.FruitMapper;

@Controller
@RequestMapping("/contact_us")
public class ContactUsController {
	
	@Autowired
	FruitMapper dao;
	
	@RequestMapping(method = RequestMethod.POST)
	public String introduce(){
		return "contact/contact-main";
		
	}
	@ResponseBody
	@RequestMapping(value="save",method = RequestMethod.POST)
	public String save(String name,String tel,String email,String content){
		dao.insertContact(name, tel, email, content);
		return "ok";
		
	}
	
}
