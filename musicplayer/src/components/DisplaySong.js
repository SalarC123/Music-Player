import React, { useContext, useState } from 'react'
import { SongContext } from './SongContext'
import './css/DisplaySong.css'
import random from '../Images/random.png'
import addToLibrary from '../Images/add.png'
import { AllSongsContext } from './AllSongsContext';

function DisplaySong() {
    const [allSongs, setAllSongs] = useContext(AllSongsContext)

    const [playButton, setPlayButton] = useState(true)
    const [songInfo, setSongInfo] = useContext(SongContext)


    const favoriteToggle = () => {
        setSongInfo({...songInfo, favorite:!songInfo.favorite})
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

        song ? setSongInfo(song): alert('Add songs to the library first')
    }

    function addDisplaySongToLibrary() {
        setAllSongs([...allSongs, songInfo])
    }

    return (
        <div className="display-song-wrapper">
            <h1 className='display-song-name'>{songInfo.name}</h1>
            <h3 className='display-song-artist'>{songInfo.artist}</h3>
            <img src={songInfo.image} alt="Song Image" className='song-image' style={{animationPlayState:discAnimation}}/>
            <div className="menu-items">
                <audio onPlay={switchPlayMode} onPause={switchPlayMode} className='audio' src={songInfo.audio} controls loop></audio>
                <img src={random} alt="Random Song" onClick={() => playRandomSong(allSongs)}/>
                <img src={addToLibrary} onClick={() => addDisplaySongToLibrary()} alt="Add to Library"/>
                <div onClick = {favoriteToggle} style={songInfo.favorite ? {backgroundColor:'red'}:{backgroundColor:'white'}} className='heart'></div>
            </div>            
        </div>
    )
}
export default DisplaySong;