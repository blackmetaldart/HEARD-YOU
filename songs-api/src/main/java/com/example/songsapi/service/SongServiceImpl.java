package com.example.songsapi.service;

import com.example.songsapi.model.Song;
import com.example.songsapi.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongServiceImpl implements SongService {
    @Autowired
    SongRepository songRepository;

    // RETURNS A LIST OF ALL THE SONGS IN THE REPOSITORY
    @Override
    public Iterable<Song> listSongs() {
        return songRepository.findAll();
    }

}
