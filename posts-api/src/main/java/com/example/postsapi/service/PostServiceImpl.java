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

    // CREATE A POST WITH A POST BODY AND A SONG ID
    @Override
    public Post createPost(Post post, Long songId) {
        post.setSongId(songId);
        return postRepository.save(post);
    }

    // GET ALL THE POSTS WITH A USERNAME
    @Override
    public List<Post> getPostsByUsername(String username) {
        return postRepository.findAllByUsername(username);
    }

    // GET A POST WITH A POSTID
    @Override
    public Post findPostByPostId(Long postId) {
        return postRepository.getPostById(postId);
    }

    // GET A LIST OF POSTS WITH A SONGID
    @Override
    public List<Post> findPostBySongId(Long songId) {
        return postRepository.getPostsBySongId(songId);
    }

    // DELETE POST WITH A POSTID
    @Override
    public ResponseEntity<Object> deletePostByPostId(Long postId){
        return postRepository.findById(postId).map (post -> {
            postRepository.delete(post);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ExceptionHandler("PostId " + postId + " not found"));
    }

    // GET A LIST OF ALL THE POSTS IN THE REPOSITORY
    @Override
    public Iterable<Post> findAllPosts(){return postRepository.findAll();}
}
