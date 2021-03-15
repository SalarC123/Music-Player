import { useState, createContext } from 'react';
import useLocalStorage from './useLocalStorage';

export const AllSongsContext = createContext()

export function AllSongsProvider(props) {
    const [allSongs, setAllSongs] = useLocalStorage('allSongs',[])

    return (
      <AllSongsContext.Provider value={[allSongs, setAllSongs]}>
          {props.children}
      </AllSongsContext.Provider>
    )
}