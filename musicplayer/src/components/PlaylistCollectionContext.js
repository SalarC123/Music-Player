import { useState, createContext } from 'react';
import useLocalStorage from './useLocalStorage';

export const PlaylistCollectionContext = createContext()

export const PlaylistCollectionProvider = (props) => {
    const [playlistCollection, setPlaylistCollection] = useLocalStorage('playlistCollection', [])

    return (
        <PlaylistCollectionContext.Provider value={[playlistCollection, setPlaylistCollection]}>
            {props.children}
        </PlaylistCollectionContext.Provider>
    )
}
