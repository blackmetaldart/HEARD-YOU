package com.example.usersapi.repository;

import com.example.usersapi.model.Song;
import org.springframework.data.repository.CrudRepository;

public interface SongRepository extends CrudRepository<Song, Long> {

}
