package com.example.postsapi.service;

import com.example.postsapi.model.Post;
import com.example.postsapi.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepository postRepository;

    @Override
    public Post createPost(String username, Post post) {
        post.setUsername(username);
        return postRepository.save(post);
    }

    @Override
    public List<Post> getPostsByUsername(String username) {
        return null;
    }

    @Override
    public Post findPostByPostId(Long postId) {
        return postRepository.getPostById(postId);
    }

    @Override
    public String findPostBySongId() {
        return null;
    }

    @Override
    public ResponseEntity<Object> deletePostByPostId(Long postId){
        return postRepository.findById(postId).map (post -> {
            postRepository.delete(post);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ExceptionHandler("PostId " + postId + " not found"));
    }
}
