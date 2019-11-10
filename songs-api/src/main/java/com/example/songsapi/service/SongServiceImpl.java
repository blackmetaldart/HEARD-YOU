package com.example.songsapi.service;

import com.example.songsapi.model.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongServiceImpl implements SongService {


    @Override
    public Iterable<Song> listSongs() {
        return songService.listSongs();
    }

}
