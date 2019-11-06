package com.example.postsapi.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

    @PostMapping("/makepost")
    public String createPost() {return "Hello World!! You just created a post!";}

    @GetMapping("/list")
    public String listPosts() {return "Hello World!! You just listed all your posts!"; }

    @PutMapping("/edit")
    public String updatePosts() {return "Hello World!! You just edited your posts!";}

    @DeleteMapping("/delete")
    public String deletePosts() {return "Hello World!! You just deleted your post!";}

}
