import './css/App.css';
import React, { useState } from 'react'
import DisplaySong from './DisplaySong'
import { SongProvider } from './SongContext'
import SongModal from './SongModal'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Contact from './Contact';
import Instructions from './Instructions'
import hamburger from '../Images/hamburger.png'

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

  const dropdownStartPosition = '-600px'
  const [hamburgerVisibility, setHamburgerVisibility] = useState({flexDirection:'column', position:0, left:0, margin:0, top: dropdownStartPosition})
  const handleHamburgerVisibility = (newState) => {
    if (hamburgerVisibility.top == dropdownStartPosition) {
      setHamburgerVisibility({...hamburgerVisibility, top:'0'})
    } else {
      setHamburgerVisibility({...hamburgerVisibility, top: dropdownStartPosition})
    }
  }

  return (
    <Router>
      <SongProvider>
        <SongModal 
            modalVisibility={modalVisibility} 
            handleModalVisibility={handleModalVisibility} 
            allSongs={allSongs}
            handleAllSongs={handleAllSongs}
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
              <button onClick={() => handleModalVisibility('flex')} className="add-new-song">Add Song</button>
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
