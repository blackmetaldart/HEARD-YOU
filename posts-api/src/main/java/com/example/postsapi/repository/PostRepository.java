package com.example.postsapi.repository;

import com.example.postsapi.model.Post;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<Post, Long> {

    // GET A LIST OF POSTS WITH THE USERNAME
    @Query("FROM Post post WHERE post.username = ?1")
    List<Post> findAllByUsername(String username);

    // GET A POST WITH THE POSTID
    @Query("FROM Post post WHERE post.id = ?1")
    Post getPostById (Long postId);

    // GET A LIST OF POSTS WITH A SONGID
    @Query("FROM Post post WHERE post.songId =?1")
    List<Post> getPostsBySongId (Long songId);

    // GET A LIST OF ALL THE POSTS IN THE REPOSITORY
    List<Post> findAll();

}
