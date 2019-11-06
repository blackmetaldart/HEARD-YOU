package com.example.songsapi.model;

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
}
