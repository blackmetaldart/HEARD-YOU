package com.example.usersapi.model;

import javax.persistence.*;

@Entity
@Table(name="post")
public class Post {

    // ID / TITLE / DESCRIPTION / USERNAME COLUMNS FOR TABLE
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String username;

    public Post(){}

    //THE GETTERS AND SETTERS FOR THE POST MODEL
    public String getUsername() {return username; }
    public void setUsername(String username) { this.username = username;}

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public String getTitle() {return title;}
    public void setTitle(String title) {this.title = title;}

    public String getDescription() {return description;}
    public void setDescription(String description) {this.description = description;}
}
