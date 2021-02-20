import React, { useEffect, useState } from 'react'
import './css/MusicAPI.css'
import search from '../Images/search.png'
import Modal from 'react-modal'

function MusicAPI({ modalData, handleModalDataChange, spotifyVisibility, handleSpotifyVisibility}) {

    const spotifyClientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const spotifyClientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
    const [searchTerm, setSearchTerm] = useState('study')
    const [spotifySongData, setSpotifySongData] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    
    const submitOnEnter = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault()
            if (searchInput) {
                setSearchTerm(searchInput)
            }
        }
    }

    useEffect(() => {
        // Resets current list of songs
        setSpotifySongData([])

        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization':'Basic ' + btoa(spotifyClientID + ':' + spotifyClientSecret) 
            },
            body: 'grant_type=client_credentials'
        })
        .then(res => res.json())
        .then(data => data.access_token)
        .then((token) => {
            fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=50`, {
            method:'GET',
            headers: {'Authorization': 'Bearer ' + token}
            })
            .then(res => res.json())
            .then(data => {
                data.tracks.items.forEach(element => {
                    // console.log(element)
                    setSpotifySongData((state) => [...state, {
                        audio: element.preview_url, 
                        name: element.name, 
                        popularity: element.popularity,
                        artist: element.artists[0].name
                    }])
                });
            })
        })
        .catch(err => console.log(err))
        // Re-renders when searchTerm changes
        }, [searchTerm])

    return (
        <Modal 
            isOpen={spotifyVisibility} 
            className='spotify-modal'
            onRequestClose={() => handleSpotifyVisibility(false)}
            style={{
                overlay: {
                    zIndex: 100,
                    backgroundColor:'rgba(0,0,0,0.6)',
                },
                content: {
                    width:'40rem', 
                    height:'45rem',
                    overflow:'scroll',
                    transform:'translate(-50%,-50%)', 
                    top:'50%', 
                    left:'50%', 
                    position:'absolute', 
                    outline:'none',
                    backgroundColor:'white'
                }
            }}
        >
            <h1 className='close-extra-modal' onClick={() => handleSpotifyVisibility(false)}>X</h1>
            <h1 className='sample-title-text'>Sample Songs (Courtesy of Spotify)</h1>
            <div className='input-and-search'>
                <input 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)} 
                    type="text" 
                    className="spotify-search"
                    onKeyDown={(e) => submitOnEnter(e)}
                />
                <img 
                    src={search} 
                    alt="Search Icon" 
                    className='search-img' 
                    onClick={(e) => searchInput ? setSearchTerm(searchInput):null}
                />
            </div>

            {/* EACH SONG IS ONLY DISPLAYED IF AUDIO PREVIEW FOR SONG IS NOT NULL */}
            {spotifySongData.map((elem) => (
                <div className={`spotify-song ${elem.audio ? '':'removed'}`} onClick={(e) => handleModalDataChange(e, {...modalData, audio: elem.audio})}>
                    <h3>{elem.name}</h3>
                    <h4>{elem.artist}</h4>
                    <p>Popularity: {elem.popularity ? elem.popularity + '/100': 'unknown'}</p>
                    <audio className='preview-song' controls src={elem.audio}/>
                </div>
            ))}
        </Modal>
    )
}

export default MusicAPI
