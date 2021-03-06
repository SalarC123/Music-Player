import { useContext, useState } from 'react';
import Modal from 'react-modal';
import PlaylistChild from './PlaylistChild'
import { PlaylistCollectionContext } from './PlaylistCollectionContext';

function PlaylistModal({ playlistModalVisibility, setPlaylistModalVisibility }) {

    const [playlistCollection, setPlaylistCollection] = useContext(PlaylistCollectionContext)

    return (
        <Modal 
            isOpen={playlistModalVisibility} 
            onRequestClose={() => setPlaylistModalVisibility(false)}
            style={
                {
                    content: {
                        width:'40rem',
                        height:'35rem',
                        overflowY:'scroll',
                        position:'absolute',
                        top:'50%',
                        left:'50%',
                        transform:'translate(-50%,-50%)',
                        backgroundColor:'white'
                    },
                    overlay: {
                        backgroundColor:'rgba(0,0,0,0.6)'
                    }
                }
            }
        >
            <h1>Playlists</h1>
            <div className="close-playlist-modal" onClick={() => setPlaylistModalVisibility(false)}>X</div>
            {playlistCollection.map((elem) => elem)}
        </Modal>
    )
}


export default PlaylistModal