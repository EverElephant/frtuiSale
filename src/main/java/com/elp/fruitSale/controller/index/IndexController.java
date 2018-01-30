package com.elp.fruitSale.controller.index;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class IndexController {
	@RequestMapping("/")
	public String home(HttpServletRequest request){
		System.out.println(getIp(request));
		return "index";
	}
	@RequestMapping("/index")
	public String index(){
		return "index";
	}

	public String getIp(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown"))
			ip = request.getHeader("Proxy-Client-IP");
		if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown"))
			ip = request.getHeader("WL-Proxy-Client-IP");
		if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown"))
			ip = request.getRemoteAddr();
		if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown"))
			ip = "unknown";
		return ip;
	}

}
