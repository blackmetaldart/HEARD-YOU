package com.example.musicapi.controller;

import com.example.musicapi.model.Song;
import com.example.musicapi.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/song")
public class SongController {

    @Autowired
    SongService songService;

    //THIS ENDPOINT ALLOWS A USER WITH THE ARTIST ROLE TO CREATE A SONG
    @PostMapping
    public Song createSong(@RequestBody Song song){
        return songService.createSong(song);
    }

    //THIS ENDPOINT ALLOWS A USER TO ACCESS THE SONG LIST
    @GetMapping("/list")
    public List<Song> listSongs(){
        return songService.listSongs();
    }

    //THIS ENDPOINT ALLOWS THE USER WITH THE ROLE ADMIN TO DELETE A SONG BY ITS ID
    @DeleteMapping("/{songId}")
    public void deleteSongById(@PathVariable Long songId) {
        songService.deleteSongById(songId);
    }


}