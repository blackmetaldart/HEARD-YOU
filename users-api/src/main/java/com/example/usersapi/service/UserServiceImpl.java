package com.example.usersapi.service;

import com.example.usersapi.config.JwtUtil;
import com.example.usersapi.model.User;
import com.example.usersapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserServiceImpl implements UserService{

    @Autowired
    JwtUtil jwtUtil;



    @Autowired
    private UserRepository userRepository;

    @Autowired
    @Qualifier("encoder")
    PasswordEncoder bCryptPasswordEncoder;


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
