package com.elp.fruitSale.controller;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/demo")
public class DemoController {

	
	@RequestMapping("/query")
	public String greeting(){

		return "demo";
	}

}
