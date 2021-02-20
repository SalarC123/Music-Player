import { useState, createContext } from 'react';

export const AllSongsContext = createContext()

export function AllSongsProvider(props) {
    const [allSongs, setAllSongs] = useState([])

    return (
      <AllSongsContext.Provider value={[allSongs, setAllSongs]}>
          {props.children}
      </AllSongsContext.Provider>
    )
}