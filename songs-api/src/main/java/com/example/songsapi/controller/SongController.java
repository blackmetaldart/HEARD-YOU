package com.example.songsapi.controller;

import com.example.songsapi.model.Song;
import com.example.songsapi.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/songs")
public class SongController {
    @Autowired
    SongService songService;

    // ENDPOINT THAT RETURNS A LIST OF THE SONGS
    @GetMapping("/list")
    public Iterable<Song> listSongs() {
        return songService.listSongs();
    }

    @PostMapping("createSong")
}
