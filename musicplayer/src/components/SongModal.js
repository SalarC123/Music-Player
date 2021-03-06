import React, { useState, useContext } from 'react'
import './css/SongModal.css'
import Unsplash from './Unsplash'
import MusicAPI from './MusicAPI'
import { AllSongsContext } from './AllSongsContext'
import Modal from 'react-modal'
import LibrarySong from './LibrarySong'

function SongModal(props) {

    const [allSongs, setAllSongs] = useContext(AllSongsContext)

    const [unsplashVisibility, setUnsplashVisibility] = useState(false)
    const [spotifyVisibility, setSpotifyVisibility] = useState(false)

    const [modalData, setModalData] = useState({name:'',artist:'',favorite:false,image:'', audio:''})
    

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
        props.handleModalVisibility(false)

        // Add new component with input data to library
        setAllSongs(
            [...allSongs, 
            <LibrarySong 
                name={modalData.name} 
                artist={modalData.artist} 
                favorite={modalData.favorite} 
                image={modalData.image} 
                audio={modalData.audio}
                />
            // {...modalData, favorite:}
            // modalData
        ])

        // Reset the modal data
        setModalData({name:'',artist:'',favorite:false,image:'', audio:''})
    }

    const chooseButton = (e, type) => {
        e.preventDefault()
        type == 'audioModal' ? setSpotifyVisibility(true) : setUnsplashVisibility(true)
    }

    return (
        <Modal 
            isOpen={props.modalVisibility} 
            onRequestClose={() => props.handleModalVisibility(false)}
            style={
                {
                    overlay:{
                        backgroundColor:'rgba(0,0,0,0.6)'
                    },
                    content:{
                        width: '30rem',
                        height:'32rem',
                        position:'absolute',
                        top:'50%',
                        left:'50%',
                        transform:'translate(-50%,-50%)'
                    }
                }
            }
        >
            <form className="modal-wrapper">
                <div onClick={() => (props.handleModalVisibility(false))} className="close-modal">X</div>
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

                <input onClick={sendInfo} type="submit" value="Add"/>

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
        </Modal>
    )
}

export default SongModal;