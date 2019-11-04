package com.example.musicapi.model;

import javax.persistence.*;
import java.util.List;

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

    //EMPTY SONG CONSTRUCTOR
    public Song() {}

    public Song(String title, int songLength, String artist) {
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
