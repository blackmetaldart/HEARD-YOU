package com.example.usersapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


public class UserController {

    //ENDPOINT THAT ALLOWS A USER TO SIGN UP / REFER TO USER SERVICE
    @PostMapping("/signup")
    public String helloWorld2() {
        return "Hello World!! You just signed up!";
    }

    //ENDPOINT THAT ALLOWS A USER TO LOG IN / REFER TO USER SERVICE
    @PostMapping("/login")
    public String helloWorld3() {
        return "Hello World!! You just logged in!";
    }

    //ENDPOINT THAT SHOWS A USER LIST / REFER TO USER SERVICE

    @GetMapping("/logout")
    public String helloWorld4() {
        return "Hello World!! You just logged out!";
    }


    //ENDPOINT TO THE ALMIGHTY HELLO WORLD / REFER TO 101
    @GetMapping("/update")
    public String helloWorld1() {
        return "Hello World!! You just updated!";
    }
}
