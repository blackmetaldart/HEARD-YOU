package com.example.songsapi.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
@Table(name = "song")
public class Song {
    //ID / TITLE / SONG-LENGTH / ARTIST COLUMNS FOR TABLE
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private Integer songLength;

    @Column
    private String artist;

    //CONSTRUCTORS FOR THE SONG MODELS
    //EMPTY SONG CONSTRUCTOR
    public Song() {}

    //CONSTRUCTOR FOR THE READ SONGS
    public Song(String title, Integer songLength, String artist) {
        this.title = title;
        this.songLength = songLength;
        this.artist = artist;
    }

    //GETTERS AND SETTERS FOR THE COLUMNS

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getSongLength() {
        return songLength;
    }
    public void setSongLength(Integer songLength) {
        this.songLength = songLength;
    }

    public String getArtist() {
        return artist;
    }
    public void setArtist(String artist) {
        this.artist = artist;
    }
}
