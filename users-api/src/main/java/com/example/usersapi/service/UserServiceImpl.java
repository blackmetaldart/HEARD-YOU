package com.example.usersapi.service;

import com.example.usersapi.config.JwtUtil;
import com.example.usersapi.model.User;
import com.example.usersapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
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
    public User getUser(String username) {
        return userRepository.findByUsername(username);
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
    public String logout() {
        return null;
    }

    //FINDS A USER BY THE USERNAME
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = getUser(username);

        if(user==null)
            throw new UsernameNotFoundException("User null");

        return new org.springframework.security.core.userdetails.User(user.getUsername(), bCryptPasswordEncoder.encode(user.getPassword()),
                true, true, true, true, new ArrayList<>());
    }

    //GRANTS A USER AUTHORITY
//    private List<GrantedAuthority> getGrantedAuthorities(User user){
//        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
//        authorities.add(new SimpleGrantedAuthority(user.getUsername()));
//        return authorities;
//    }

}
