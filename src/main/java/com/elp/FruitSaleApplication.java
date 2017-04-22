package com.elp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.elp.fruitSale.mapper.BuyMapper;

@SpringBootApplication
public class FruitSaleApplication {

	public static void main(String[] args) {
		SpringApplication.run(FruitSaleApplication.class, args);
	}
}
