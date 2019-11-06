package com.example.postsapi.model;

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
}
