package com.example.postsapi.service;

import com.example.postsapi.model.Post;

import java.util.List;

public interface PostService {
    String createPost(String username, Post post);
    List<Post> getPostsByUsername(String username);
    String findPostByPostId(Long postId);
    String findPostBySongId();
    String deletePost();

}
