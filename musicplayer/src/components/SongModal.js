import React, {useState} from 'react'
import LibrarySong from './LibrarySong'
import './css/SongModal.css'

function SongModal(props) {

    const [modalData, setModalData] = useState({name:'',artist:'',favorite:'',image:'', audio:''})

    const handleModalDataChange = (e) => {
        setModalData({...modalData, [e.target.id]: e.target.id=='favorite' ? e.target.checked: e.target.value})
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
        console.log(props.allSongs)
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
            <label htmlFor="image">Image Address</label>
            <input type="text" id='image' value={modalData.image} onChange={handleModalDataChange}/>
            <label htmlFor="image">Audio File</label>
            <input type="text" id='audio' value={modalData.audio} onChange={handleModalDataChange}/>

            <input onClick={sendInfo} type="submit" value="Add Song"/>
        </form>
    )
}

export default SongModal;