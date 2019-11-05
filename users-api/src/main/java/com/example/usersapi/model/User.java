package com.example.usersapi.model;

import javax.persistence.Column;

public class User {
    id SERIAL

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String email;

    @Column
    private String username;

    @Column
    private String password;
}
