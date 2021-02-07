import React, {useState} from 'react'
import './css/DisplaySong.css'
import play from '../Images/play.png'
import pause from '../Images/pause.png'
import previous from '../Images/previous.png'
import next from '../Images/next.png'
import add from '../Images/add.png'

function DisplaySong({ songInfo }) {

    const [playButton, setPlayButton] = useState(true)

    return (
        <div className="display-song-wrapper">
            <h1 className='display-song-name'>{songInfo.name}</h1>
            <h3 className='display-song-artist'>{songInfo.artist}</h3>
            <img src={songInfo.image} alt="Song Image" className='song-image'/>
            <div className="menu-items">
                <img src={previous} alt="Previous"/>
                <img src={playButton?play:pause} onClick={() => setPlayButton(!playButton)} alt="Play/Pause"/>
                <img src={next} alt="Next"/>
                <img src={add} alt="Add to Playlist"/>
                <div style={songInfo.favorite ? {backgroundColor:'red'}:{backgroundColor:'white'}} className='heart'></div>
            </div>
        </div>
    )
}
export default DisplaySong;