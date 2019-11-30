package com.example.postsapi.controller;

import com.example.postsapi.model.Post;
import com.example.postsapi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostService postService;

    // ENDPOINT FOR MAKING A POST WITH A SONG ID
    @PostMapping("{songId}/makepost")
    public Post createPost(@Valid @RequestBody Post post, @Valid @PathVariable Long songId){
        return postService.createPost(post, songId);
    }

    // ENDPOINT FOR GETTING A LIST OF ALL THE POSTS THAT BELONG TO A SONG
    @GetMapping("{songId}/posts")
    public List<Post> getPostsBySongId(@PathVariable Long songId) {return postService.findPostBySongId(songId);}

    // ENDPOINT TO DELETE A POST WITH THE POSTID
    @DeleteMapping ("/post/{postId}")
    public ResponseEntity<Object> deletePostByPostId(@PathVariable Long postId) { return postService.deletePostByPostId(postId);
    }

    // ENDPOING THAT RETURNS A LIST OF THE POSTS
    @GetMapping("/list")
    public Iterable<Post> listPosts(){
        return postService.findAllPosts();
    }

}
