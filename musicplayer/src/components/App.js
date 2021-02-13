import './css/App.css';
import React, { useState, useEffect } from 'react'
import LibrarySong from './LibrarySong'
import DisplaySong from './DisplaySong'
import { SongProvider } from './SongContext'
import SongModal from './SongModal'

function App() {

  const [sidebarPosition, setSidebarPosition] = useState(false)

  // Positions the sidebar when the "open library" button is clicked
  const moveSidebar = () => {
    sidebarPosition ? setSidebarPosition('') : setSidebarPosition('sidebar-move')
  }

  const [allSongs, setAllSongs] = useState([])
  const handleAllSongs = (value) => {
    setAllSongs(value)
  }

  const [modalVisibility, setModalVisibility] = useState('none')
  const handleModalVisibility = (display) => {
    setModalVisibility(display)
  }

  return (
    <SongProvider>
      <>
        <SongModal 
            modalVisibility={modalVisibility} 
            handleModalVisibility={handleModalVisibility} 
            allSongs={allSongs}
            handleAllSongs={handleAllSongs}
        />
        <div className="open-library-wrapper">
          <h2 onClick={moveSidebar} className="open-library">Open Library</h2>
        </div>
        <DisplaySong/>
        <div className={`sidebar ${sidebarPosition?'sidebar-move':''}`}>
          <button onClick={() => handleModalVisibility('flex')} className="add-new-song">Add Song</button>
          {allSongs.map((song) => (song))}
        </div>
      </>
    </SongProvider>
  );
}

export default App;
