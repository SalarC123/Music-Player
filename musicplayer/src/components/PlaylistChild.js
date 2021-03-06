import {useContext} from 'react'
import './css/PlaylistChild.css'
import { AllSongsContext } from './AllSongsContext';
import { PlaylistCollectionContext } from './PlaylistCollectionContext';
import { isEqual } from 'lodash';

function PlaylistChild({ songsInPlaylist, name }) {

    const [playlistCollection, setPlaylistCollection] = useContext(PlaylistCollectionContext)
    const [allSongs, setAllSongs] = useContext(AllSongsContext)

    function removePlaylist(event) {
        setPlaylistCollection(playlistCollection.filter((elem) => elem.props.songsInPlaylist != songsInPlaylist && elem.props.name != name))
    }

    return (
        <div className='all-playlists'>
            <h2 className='playlist-name'>{name}</h2>
            <div className="playlist-content-wrapper">
                <div className="choose-delete-wrapper">
                    <div onClick={() => setAllSongs(songsInPlaylist)} className="choose-playlist">choose</div>
                    <div onClick={(e) => removePlaylist(e)} className="delete-playlist">delete</div>
                </div>
                <div className="playlist-content">
                    {songsInPlaylist.map((song) => 
                        <p>
                            <img src={song.props.image}/>
                            {song.props.name} by {song.props.artist} 
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PlaylistChild