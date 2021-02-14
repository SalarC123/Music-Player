import React, {useState} from 'react'
import LibrarySong from './LibrarySong'
import './css/SongModal.css'
import Unsplash from './Unsplash'
import MusicAPI from './MusicAPI'

function SongModal(props) {

    const [unsplashVisibility, setUnsplashVisibility] = useState(false)
    const [spotifyVisibility, setSpotifyVisibility] = useState(false)

    const [modalData, setModalData] = useState({name:'',artist:'',favorite:'',image:'', audio:''})

    // TODO: Clean up this function
    const handleModalDataChange = (e, newState='') => {
        if (e.type == 'change') {
            // Changes input state based on if input is text or a checkbox
            setModalData({...modalData, [e.target.id]: e.target.id=='favorite' ? e.target.checked: e.target.value})
        } else if (e.type == 'click') {
            setModalData(newState)
        }
    }
    
    const sendInfo = (event) => {
        // Stop form submission event
        event.preventDefault()

        // Render the modal invisible once form is submitted
        props.handleModalVisibility('none')

        // Add new component with input data to library
        props.handleAllSongs(
            [...props.allSongs, 
            <LibrarySong 
                name={modalData.name} 
                artist={modalData.artist} 
                favorite={modalData.favorite} 
                image={modalData.image} 
                audio={modalData.audio}
                key={modalData.name}/>
        ])

        // Reset the modal data
        setModalData({name:'',artist:'',favorite:'',image:'', audio:''})
    }

    const chooseButton = (e, type) => {
        e.preventDefault()
        type == 'audioModal' ? setSpotifyVisibility(true) : setUnsplashVisibility(true)
    }

    return (
        <form className="modal-wrapper" style={{display:props.modalVisibility}}>
            <div onClick={() => (props.handleModalVisibility('none'))} className="close-modal">X</div>
            <label htmlFor="name">Title</label>
            <input type="text" id='name' value={modalData.name} onChange={handleModalDataChange}/>
            <label htmlFor="artist">Artist</label>
            <input type="text" id='artist' value={modalData.artist} onChange={handleModalDataChange}/>
            <label htmlFor="favorite">Favorite?</label>
            <input type="checkbox" id='favorite' value={modalData.favorite} onChange={handleModalDataChange}/>
            <label htmlFor="image">Image Address or <button onClick={(e) => chooseButton(e,'imageModal')} className='choose-button'>choose</button></label>
            <input type="text" id='image' value={modalData.image} onChange={handleModalDataChange}/>
            <label htmlFor="image">Audio File or <button onClick={(e) => chooseButton(e,'audioModal')} className='choose-button'>choose</button></label>
            <input type="text" id='audio' value={modalData.audio} onChange={handleModalDataChange}/>

            <input onClick={sendInfo} type="submit" value="Add Song"/>

            <Unsplash 
                modalData={modalData} 
                handleModalDataChange={handleModalDataChange}
                unsplashVisibility={unsplashVisibility}
                handleUnsplashVisibility={setUnsplashVisibility}
                />
            <MusicAPI 
                modalData={modalData} 
                handleModalDataChange={handleModalDataChange}
                spotifyVisibility={spotifyVisibility}
                handleSpotifyVisibility={setSpotifyVisibility}
                />
        </form>
    )
}

export default SongModal;