package com.example.postsapi.service;

import com.example.postsapi.config.ExceptionHandler;
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
    public Post createPost(Post post, Long songId) {
        post.setSongId(songId);
        return postRepository.save(post);
    }

    @Override
    public List<Post> getPostsByUsername(String username) {
        return postRepository.findAllByUsername(username);
    }

    @Override
    public Post findPostByPostId(Long postId) {
        return postRepository.getPostById(postId);
    }

    @Override
    public List<Post> findPostBySongId(Long songId) {
        return postRepository.getPostsBySongId(songId);
    }

    @Override
    public ResponseEntity<Object> deletePostByPostId(Long postId){
        return postRepository.findById(postId).map (post -> {
            postRepository.delete(post);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ExceptionHandler("PostId " + postId + " not found"));
    }

    @Override
    public Iterable<Post> findAllPosts(){return postRepository.findAll();}
}
