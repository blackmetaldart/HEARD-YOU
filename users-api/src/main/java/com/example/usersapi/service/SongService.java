package com.example.usersapi.service;

import com.example.usersapi.model.Song;

import java.util.List;

public interface SongService {

    public Song createSong(Song song);

    public List<Song> listSongs();

    public void deleteSongById(Long songId);
}
