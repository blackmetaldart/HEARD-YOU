package com.example.usersapi.service;

import com.example.usersapi.model.User;

public interface UserService {
    String createUser(User user);
    String login(User user);
    String createProfile();
    String updateProfile();
    String logout();
}
