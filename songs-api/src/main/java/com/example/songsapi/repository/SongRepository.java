package com.example.songsapi.repository;

import com.example.songsapi.model.Song;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SongRepository extends CrudRepository<Song, Long> {
    List<Song> findAll();

}
