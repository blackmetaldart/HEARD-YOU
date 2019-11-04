package com.example.usersapi.service;

import com.example.postsapi.model.Post;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PostService {
    Post createPost(String username, Post post);
    ResponseEntity<Object> deletePostByPostId(Long postId);
    List<Post> getPostsByUsername(String username);
    Post getPostByPostId (Long postId);
    Iterable<Post> listAllPosts();
}
