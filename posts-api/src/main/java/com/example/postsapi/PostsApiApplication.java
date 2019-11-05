package com.example.postsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class PostsApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(PostsApiApplication.class, args);
	}
	@RequestMapping(value = "/posts")
	public String home() {
		return "Eureka Client : Posts application";
	}
}