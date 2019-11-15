package com.example.postsapi;

import com.netflix.ribbon.proxy.annotation.Http;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

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