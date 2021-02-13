import './css/LibrarySong.css'
import { useContext } from 'react'
import { SongContext } from './SongContext'

function LibrarySong(props) {
    const [songInfo, setSongInfo] = useContext(SongContext)

    const switchSong = () => {
        setSongInfo({
            name: props.name, 
            artist: props.artist, 
            image: props.image, 
            favorite: props.favorite,
            audio: props.audio
        })
    }
    
    return (
        <div className='library-song'>
            <button className='delete-from-library'>X</button>
            <h1>{props.name}</h1>
            <p>{props.artist}</p>
            <div className='library-heart' style={{backgroundColor:props.favorite?'red':'white'}}></div>
            <img className='switch-image' src={props.image} alt=""/>
            <button className='switch-button' onClick={switchSong}>SWITCH TO THIS SONG</button>
        </div>
    )
}

export default LibrarySong;