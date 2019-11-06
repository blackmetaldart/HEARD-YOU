package com.example.postsapi.model;

import javax.persistence.*;

@Entity
@Table(name="post")
public class Post {

    // ID / TITLE / DESCRIPTION / USERNAME / SONGID COLUMNS FOR TABLE
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

    @Column
    private Long songId;

    //EMPTY CONSTRUCTOR FOR THE POSTS
    public Post(){}

    //GETTERS AND SETTERS FOR THE POST DATA
    public String getTitle(){return title;}
    public void setTitle(String title){this.title = title;}

    public String getDescription(){return description;}
    public void setDescription(String description){this.description = description;}

    public String getUsername(){return username;}
    public void setUsername(String username){this.username = username;}

    public Long getSongId(){return songId;}
    public void setSongId(Long songId){this.songId = songId;}

}
