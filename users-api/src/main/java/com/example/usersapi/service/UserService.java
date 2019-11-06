package com.example.usersapi.service;

import com.example.usersapi.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    String createUser(User user);
    String login(User user);
    User getUser(String username);
    String logout();
}
