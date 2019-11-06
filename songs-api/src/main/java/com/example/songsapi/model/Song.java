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
    private int songLength;

    @Column
    private String artist;

    //CONSTRUCTORS FOR THE SONG MODELS
    //EMPTY SONG CONSTRUCTOR
    public Song() {}

    //CONSTRUCTOR FOR THE READ SONGS
    public Song(String title, int songLength, String artist) {
        this.title = title;
        this.songLength = songLength;
        this.artist = artist;
    }

    //GETTERS AND SETTERS FOR THE COLUMNS
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getSongLength() {
        return songLength;
    }

    public void setSongLength(int songLength) {
        this.songLength = songLength;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }
}
