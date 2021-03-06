import { useState, createContext } from 'react';

export const PlaylistCollectionContext = createContext()

export const PlaylistCollectionProvider = (props) => {
    const [playlistCollection, setPlaylistCollection] = useState([])

    return (
        <PlaylistCollectionContext.Provider value={[playlistCollection, setPlaylistCollection]}>
            {props.children}
        </PlaylistCollectionContext.Provider>
    )
}
