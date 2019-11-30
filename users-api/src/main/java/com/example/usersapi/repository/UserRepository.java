package com.example.usersapi.repository;

import com.example.usersapi.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    // FIND USER BY USERNAME
    User findByUsername (String username);

    // FIND THE USER BY USERNAME AND PASSWORD
    @Query("FROM User u WHERE u.username = ?1 and u.password = ?2")
    User login(String username, String password);

}
