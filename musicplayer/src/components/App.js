import './css/App.css';
import React, {useState} from 'react'
import LibrarySong from './LibrarySong'
import DisplaySong from './DisplaySong'

function App() {

  const [songInfo, setSongInfo] = useState({
    name:'Blinding Lights', 
    artist:'The Weekend', 
    favorite:true, 
    image:'https://img.republicworld.com/republic-prod/stories/images/16008700015f6b5671dd1a4.jpg'
  })

  return (
    <div>
      <DisplaySong songInfo={songInfo}/>
    </div>
  );
}

export default App;
