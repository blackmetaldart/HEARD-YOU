package com.example.usersapi.service;

import com.example.usersapi.config.CSVReader;
import com.example.usersapi.model.Song;
import com.example.usersapi.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongServiceImpl implements SongService {

    @Autowired
    SongRepository songRepository;

    @Autowired
    CSVReader csvReader;

    /**
     * The song repository extends the CrudRepository which has a save method
     * @param song
     * @return
     */
    @Override
    public Song createSong(Song song) {
        return songRepository.save(song);
    }

    /**
     * The SongRepository extends the CrudRepository which has a findAll method
     * @return
     */
    @Override
    public List<Song> listSongs(){
        return csvReader.readSongsFromCSV("/Users/marksman/Desktop/OwnWork/GADA-Work/GADA-PROJECTS/Swap-app/songs.csv");
    }

    @Override
    public void deleteSongById(Long songId){
        songRepository.deleteById(songId);
    }
}
