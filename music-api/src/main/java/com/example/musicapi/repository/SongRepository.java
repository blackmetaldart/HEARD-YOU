package com.example.musicapi.repository;

import com.example.musicapi.model.Song;
import org.springframework.data.repository.CrudRepository;

public interface SongRepository extends CrudRepository<Song, Long> {

}
