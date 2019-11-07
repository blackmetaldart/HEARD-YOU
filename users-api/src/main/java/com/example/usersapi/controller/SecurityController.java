package com.example.usersapi.controller;

import com.example.usersapi.config.AuthenticationFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
public class SecurityController {

    @Autowired
    private AuthenticationFacade authenticationFacade;


    public String getCurrentUsername() {
        Authentication authentication = authenticationFacade.getAuthentication();
        return authentication.getName();
    }
}