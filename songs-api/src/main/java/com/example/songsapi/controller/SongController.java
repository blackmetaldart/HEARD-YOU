package com.example.songsapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SongController {

    @GetMapping("/songs")
    public String listPosts() {return "Hello World! You just listed all the songs!";}

}
