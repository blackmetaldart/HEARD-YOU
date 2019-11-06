package com.example.postsapi.controller;

import com.example.postsapi.model.Post;
import com.example.postsapi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PostController {

    @Autowired
    PostService postService;

    @PostMapping("{username}/makepost")
    public Post createPost(@Valid @RequestBody Post post, @Valid @PathVariable String username){
        return postService.createPost(username, post);
    }

    @GetMapping("{songId}/posts")
    public List<Post> getPostsBySongId(@PathVariable Long songId) {return postService.findPostBySongId(songId);}

    @DeleteMapping ("/post/{postId}")
    public ResponseEntity<Object> deletePostByPostId(@PathVariable Long postId) { return postService.deletePostByPostId(postId);
    }

}
