import { useContext, useState } from 'react';
import Modal from 'react-modal';
import PlaylistChild from './PlaylistChild'
import { PlaylistCollectionContext } from './PlaylistCollectionContext';
import { VisibilityContext } from './VisibilityContext'

function PlaylistModal() {

    const [playlistCollection, setPlaylistCollection] = useContext(PlaylistCollectionContext)
    const [visibility, dispatch] = useContext(VisibilityContext)

    return (
        <Modal 
            ariaHideApp={false}
            isOpen={visibility.playlistModalVisibility} 
            onRequestClose={() => dispatch({type:'hide', payload:'playlistModalVisibility'})}
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
            <div className="close-playlist-modal" onClick={() => dispatch({type:'hide', payload:'playlistModalVisibility'})}>X</div>
            {playlistCollection.map((elem) => <PlaylistChild songsInPlaylist={elem.props.songsInPlaylist} name={elem.props.name}/>)}
        </Modal>
    )
}


export default PlaylistModal