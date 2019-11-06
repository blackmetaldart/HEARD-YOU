package com.example.postsapi.service;

import com.example.postsapi.model.Post;

public interface PostService {
    String createPost(String username, Post post);
    String findPostByPostId();
    String findPostBySongId();
    String deletePost();

}
