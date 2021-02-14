import './css/LibrarySong.css'
import { useContext } from 'react'
import { SongContext } from './SongContext'
import { unmountComponentAtNode } from 'react-dom';

function LibrarySong({ name, artist, image, favorite, audio, key }) {
    const [songInfo, setSongInfo] = useContext(SongContext)
    // allSongs.filter((elem) => console.log(elem, key))       //elem.key != key

    const switchSong = () => {
        setSongInfo({
            name: name, 
            artist: artist, 
            image: image, 
            favorite: favorite,
            audio: audio
        })
    }

    // Removes library songs
    function removeNode(e, node) {
        unmountComponentAtNode(node)
        e.target.parentElement.parentElement.removeChild(node)
    }
    
    return (
        <div className='library-song'>
            <button onClick={(e) => removeNode(e, e.target.parentElement)} className='delete-from-library'></button>
            <h1>{name}</h1>
            <p>{artist}</p>
            <div className='library-heart' style={{backgroundColor:favorite?'red':'white'}}></div>
            <img className='switch-image' src={image} alt=""/>
            <button className='switch-button' onClick={switchSong}>CHOOSE</button>
        </div>
    )
}

export default LibrarySong;