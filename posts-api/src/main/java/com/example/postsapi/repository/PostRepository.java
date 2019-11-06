package com.example.postsapi.repository;

import com.example.postsapi.model.Post;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<Post, Long> {
    @Query("FROM Post post WHERE post.username = ?1")
    List<Post> findAllByUsername(String username);

    @Query("FROM Post post WHERE post.id = ?1")
    Post getPostById (Long postId);

    @Query("FROM Post post WHERE post.songId =?1")
    List getPostsBySongId (Long songId);

}
