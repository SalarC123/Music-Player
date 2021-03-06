import './css/LibrarySong.css';
import { useContext } from 'react';
import { SongContext } from './SongContext';
import { AllSongsContext } from './AllSongsContext';

function LibrarySong(props) {
    // Assign unique props.key for each library song

    const [allSongs, setAllSongs] = useContext(AllSongsContext)

    const [songInfo, setSongInfo] = useContext(SongContext)
    // allSongs.filter((elem) => console.log(elem, props.key))       //elem.key != props.key

    const switchSong = () => {
        

        setSongInfo({
            name: props.name, 
            artist: props.artist, 
            image: props.image, 
            favorite: props.favorite,
            audio: props.audio
        })
    }

    // Removes library songs
    function removeSong() {
        setAllSongs(allSongs.filter((elem) => elem.props != props))
    }
    
    return (
        <div className='library-song'>
            <button onClick={removeSong} className='delete-from-library'></button>
            <h1>{props.name}</h1>
            <p>{props.artist}</p>
            <div className='library-heart' style={{backgroundColor:props.favorite?'red':'white'}}></div>
            <img className='switch-image' src={props.image} alt=""/>
            <button className='switch-button' onClick={switchSong}>CHOOSE</button>
        </div>
    )
}

export default LibrarySong;