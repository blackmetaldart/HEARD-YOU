package com.example.usersapi.service;

import com.example.usersapi.model.User;
import org.springframework.security.core.userdetails.UserDetails;

public class UserServiceImpl implements UserService{

    @Override
    public String createUser(User newUser) {

        newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
        if(userRepository.save(newUser) != null){
            UserDetails userDetails = loadUserByUsername(newUser.getUsername());
            return jwtUtil.generateToken(userDetails);
        }
        return null;
    }

    @Override
    public String login(User user){
        User newUser = userRepository.findByUsername(user.getUsername());
        if(newUser != null && bCryptPasswordEncoder.matches(user.getPassword(), newUser.getPassword())){
            UserDetails userDetails = loadUserByUsername(newUser.getUsername());
            return jwtUtil.generateToken(userDetails);
        }
        return null;
    }

    @Override
    public String createProfile() {
        return null;
    }

    @Override
    public String updateProfile() {
        return null;
    }

    @Override
    public String logout() {
        return null;
    }
}
