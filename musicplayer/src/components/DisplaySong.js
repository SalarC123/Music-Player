import React, { useContext, useState } from 'react'
import { SongContext } from './SongContext'
import './css/DisplaySong.css'
import random from '../Images/random.png'
import add from '../Images/add.png'
import { AllSongsContext } from './AllSongsContext';
import isEqual from 'lodash.isequal';
import LibrarySong from './LibrarySong'

function DisplaySong() {
    const [allSongs, setAllSongs] = useContext(AllSongsContext)

    const [playButton, setPlayButton] = useState(true)
    const [songInfo, setSongInfo] = useContext(SongContext)


    const favoriteToggle = () => {
        setSongInfo({...songInfo, favorite:!songInfo.favorite})

        // for (let i = 0; i < allSongs.length; i++) {

        //     const adjustedLibrarySong = {...allSongs[i].props, key:null}
        //     const adjustedDisplaySong = {...songInfo, key:null}

        //     if (isEqual(adjustedDisplaySong,adjustedLibrarySong)) {
        //         alert('yes')
        //         setIsFavorited(songInfo.favorite)
        //     } else {
        //         alert('no')
        //         console.log(allSongs[i].props, songInfo)
        //     }
        // }
    }

    const [discAnimation, setDiscAnimation] = useState('paused')

    const switchPlayMode = (e) => {
        setPlayButton(!playButton)
        playButton ? setDiscAnimation('running'): setDiscAnimation('paused')
    }

    const playRandomSong = (songCollection) => {
        const length = songCollection.length
        const randomIndex = Math.floor( Math.random() * length )
        const song = songCollection[randomIndex]

        song ? setSongInfo(song.props): alert('Add songs to the library first')
    }

    function addDisplaySongToLibrary() {
        setAllSongs([...allSongs, 
            <LibrarySong
                name={songInfo.name}
                artist={songInfo.artist}
                favorite={songInfo.favorite}
                image={songInfo.image}
                audio={songInfo.audio}
                />
            ]
        )
    }

    return (
        <div className="display-song-wrapper">
            <h1 className='display-song-name'>{songInfo.name}</h1>
            <h3 className='display-song-artist'>{songInfo.artist}</h3>
            <img src={songInfo.image} alt="Song Image" className='song-image' style={{animationPlayState:discAnimation}}/>
            <div className="menu-items">
                <audio onPlay={switchPlayMode} onPause={switchPlayMode} className='audio' src={songInfo.audio} controls loop></audio>
                <img src={random} alt="Random Song" onClick={() => playRandomSong(allSongs)}/>
                <img src={add} onClick={() => addDisplaySongToLibrary()} alt="Add to Playlist"/>
                <div onClick = {favoriteToggle} style={songInfo.favorite ? {backgroundColor:'red'}:{backgroundColor:'white'}} className='heart'></div>
            </div>            
        </div>
    )
}
export default DisplaySong;