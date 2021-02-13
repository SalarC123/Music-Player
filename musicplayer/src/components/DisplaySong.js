import React, { useContext, useState } from 'react'
import { SongContext } from './SongContext'
import './css/DisplaySong.css'
// import play from '../Images/play.png'
// import pause from '../Images/pause.png'
import previous from '../Images/previous.png'
import next from '../Images/next.png'
import add from '../Images/add.png'
import info from '../Images/info.png';

function DisplaySong() {

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

    return (
        <div className="display-song-wrapper">
            <h1 className='display-song-name'>{songInfo.name}</h1>
            <h3 className='display-song-artist'>{songInfo.artist}</h3>
            <img src={songInfo.image} alt="Song Image" className='song-image' style={{animationPlayState:discAnimation}}/>
            <div className="menu-items">
                <img src={previous} alt="Previous"/>
                <audio onPlay={switchPlayMode} onPause={switchPlayMode} className='audio' src={songInfo.audio} controls loop></audio>
                <img src={next} alt="Next"/>
                <img src={info} alt="Song Info"/>
                <img src={add} alt="Add to Playlist"/>
                <div onClick = {favoriteToggle} style={songInfo.favorite ? {backgroundColor:'red'}:{backgroundColor:'white'}} className='heart'></div>
            </div>
        </div>
    )
}
export default DisplaySong;