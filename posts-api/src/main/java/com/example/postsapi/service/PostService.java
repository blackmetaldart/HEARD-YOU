package com.example.postsapi.service;

import com.example.postsapi.model.Post;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PostService {
    Post createPost(String username, Post post);
    List<Post> getPostsByUsername(String username);
    Post findPostByPostId(Long postId);
    List<Post> findPostBySongId(Long songId);
    ResponseEntity<Object> deletePostByPostId(Long postId);
    Iterable<Post> findAllPosts();

}
