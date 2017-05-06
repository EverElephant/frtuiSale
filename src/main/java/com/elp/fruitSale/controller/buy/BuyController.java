package com.elp.fruitSale.controller.buy;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.elp.fruitSale.mapper.BuyMapper;
import com.elp.fruitSale.model.Product;

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

	@RequestMapping(value="trolley",method = RequestMethod.POST)
	public String trolley(HttpServletRequest request,HttpServletResponse response,Model model){
		String cookiesStr = request.getHeader("Cookie");
		if(null==cookiesStr||"".equals(cookiesStr)){
			
			return "buy/toBuy-trolley";
		}
		String[] cookies = cookiesStr.split(";");
		float total=0;
		//返回结果
		ArrayList<Product> productList=new ArrayList<>();
		//查询价格
		List<HashMap<String,Object>> prices = dao.queryAllPrice();
		//购物车缓存String
		String trolleysString="";

		//如果有缓存
		if(null!=cookies){
			for(String c:cookies){
				String[] cookieArray = c.split("=");
				if(("shopping_trolley").equals(cookieArray[0].trim())){
					trolleysString=cookieArray[1];
				}
			}
		}
		if(!trolleysString.equals("")){
			@SuppressWarnings("unchecked")
			List<JSONObject> list =(List<JSONObject>) JSON.parseObject(trolleysString, ArrayList.class);
			//看看购物车里有没有该商品，有则加数，无则添加
			for(JSONObject p:list){
				Product pro = new Product();			
				pro.setType((String) p.get("type"));
				pro.setNum((int) p.get("num"));
				
				String type =(String) p.get("type");
				for(HashMap<String,Object> m :prices){
					if(type.equals(m.get("type"))){
						pro.setName((String)m.get("name"));
						pro.setPrice((float)m.get("price"));
						
					}
						
				}
				float smallTotal =pro.getNum()*pro.getPrice();
				pro.setTotalPrice(smallTotal);
				total = total+smallTotal;
				productList.add(pro);
			}
		}
		model.addAttribute("total",total);
		model.addAttribute("productList", productList);
		return "buy/toBuy-trolley";
	}
	
	
}

