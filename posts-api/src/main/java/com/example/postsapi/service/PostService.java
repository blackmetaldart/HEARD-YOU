package com.example.postsapi.service;

public interface PostService {
    String createPost();
    String findPostByPostId();
    String findPostBySongId();
    String deletePost();

}
