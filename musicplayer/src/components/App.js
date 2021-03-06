import './css/App.css';
import React, { useState, useContext } from 'react'
import DisplaySong from './DisplaySong'
import { SongProvider } from './SongContext'
import SongModal from './SongModal'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Contact from './Contact';
import Instructions from './Instructions'
import hamburger from '../Images/hamburger.png'
import { AllSongsContext } from './AllSongsContext'
import PlaylistModal from './PlaylistModal';
import PlaylistChild from './PlaylistChild';
import { PlaylistCollectionContext } from './PlaylistCollectionContext';

function App() {

  const [playlistCollection, setPlaylistCollection] = useContext(PlaylistCollectionContext)

  const [playlistModalVisibility, setPlaylistModalVisibility] = useState(false)

  const [sidebarPosition, setSidebarPosition] = useState(false)

  // Positions the sidebar when the "open library" button is clicked
  const moveSidebar = () => {
      sidebarPosition ? setSidebarPosition('') : setSidebarPosition('sidebar-move')
  }

  const [allSongs, setAllSongs] = useContext(AllSongsContext)

  const [modalVisibility, setModalVisibility] = useState(false)
  const handleModalVisibility = (display) => {
      setModalVisibility(display)
  }

  const dropdownStartPosition = '-600px'
  const [hamburgerVisibility, setHamburgerVisibility] = useState({flexDirection:'column', position:0, left:0, margin:0, top: dropdownStartPosition})
  const handleHamburgerVisibility = () => {
      if (hamburgerVisibility.top == dropdownStartPosition) {
          setHamburgerVisibility({...hamburgerVisibility, top:'0'})
      } else {
          setHamburgerVisibility({...hamburgerVisibility, top: dropdownStartPosition})
      }
  }

  function savePlaylist(songs) {
    if (songs.length) {
      const playlistName = prompt('Name your playlist')
      
      if (playlistName) {
        // makes a copy of songs
        const playlistItems = [...songs]
        setPlaylistCollection(
          [...playlistCollection, 
            <PlaylistChild songsInPlaylist={playlistItems} name={playlistName}/>
          ]
        )
      }
    }
  }

  return (
    <Router>
      <SongProvider>
        <PlaylistModal
            playlistModalVisibility={playlistModalVisibility}
            setPlaylistModalVisibility={setPlaylistModalVisibility}
            playlistCollection={playlistCollection}
        />
        <SongModal 
            modalVisibility={modalVisibility} 
            handleModalVisibility={handleModalVisibility}
        />
        {/* <h1 className='project-title'>Interactive Music Player</h1> */}
        <img onClick={() => handleHamburgerVisibility()} className='hamburger' src={hamburger} alt="Hamburger Menu"/>
        <div className="open-library-wrapper" style={hamburgerVisibility}>
            <Link style={{textDecoration:'none'}} to='/'>
                <h2>Home</h2>
            </Link>
            <Link style={{textDecoration:'none'}} to='/instructions'>
                <h2>Instructions</h2>
            </Link>
            <Link style={{textDecoration:'none'}} to='/contact'>
                <h2>Contact</h2>
            </Link>

            <h2 onClick={moveSidebar}>Toggle Library</h2>
        </div>

        <Switch>

          <Route exact path='/'>
              <DisplaySong/>
              <div className={`sidebar ${sidebarPosition?'sidebar-move':''}`}>
                <button onClick={() => handleModalVisibility(true)} className="sidebar-buttons">Add Song</button>
                <button className="sidebar-buttons" onClick={() => setPlaylistModalVisibility(true)}>Select Playlist</button>
                <button onClick={() => savePlaylist(allSongs)} className="sidebar-buttons">Save Playlist</button>
                {allSongs.map((song) => (song))}
              </div>
          </Route>

          <Route exact path='/instructions'>
              <Instructions/>
          </Route>

          <Route exact path='/contact'>
              <Contact/>
          </Route>

        </Switch>
      </SongProvider>
    </Router>
  );
}

export default App;
