package com.example.usersapi.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
@Table(name = "users")
public class User {

    // ID / FIRSTNAME / LASTNAME / EMAIL / USERNAME / PASSWORD COLUMNS FOR TABLE
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String email;

    @Column(unique=true)
    private String username;

    @Column
    private String password;

    //EMPTY USER CONSTRUCTOR
    public User(){}

    //THE GETTERS AND SETTERS FOR THE USER MODEL DATE
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName;}

    public String getLastName() {return lastName;}
    public void setLastName(String lastName) {this.lastName = lastName;}

    public String getEmail(){return email;}
    public void setEmail(String email) { this.email = email;}

    public String getUsername() {return username;}
    public void setUsername(String username) {this.username = username;}

    public String password() {return password;}
    public void setPassword(String password) {this.password = password;}

}