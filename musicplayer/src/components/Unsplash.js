import React, {useState, useEffect, useContext} from 'react'
import './css/Unsplash.css'
import Modal from 'react-modal'
import checkmark from '../Images/checkmark.png'
import { VisibilityContext } from './VisibilityContext'

function Unsplash({ handleModalDataChange, modalData, checkOpacity }) {

    const [visibility, dispatch] = useContext(VisibilityContext)  

    const [images, setImages] = useState([])
    useEffect(() => {
      fetch('https://api.unsplash.com/photos/random/?client_id=afLognfbE84vRrC-Lf6ygcqw9m6jf5-td6b5PiXUvyk&count=30')
      .then(res => res.json())
      .then(data => {setImages(data)})
    }, [])

    return (
      <Modal 
        isOpen={visibility.unsplashVisibility} 
        className='unsplash-modal'
        onRequestClose={() => dispatch({type:'hide', payload:'unsplashVisibility'})}
        style={{
          overlay: {
            zIndex: 100,
            backgroundColor:'rgba(0,0,0,0.6)'
          },
          content: {
            width:'47rem', 
            transform:'translate(-50%,-50%)', 
            top:'50%', 
            left:'50%', 
            position:'absolute', 
            outline:'none',
            backgroundColor:'white',
          }
        }}>

        <h1 className='close-extra-modal' onClick={() => dispatch({type:'hide', payload:'unsplashVisibility'})}>X</h1>
        <h1 className='sample-title-text'>Sample Images (Courtesy of Unsplash)</h1>
        <div className='unsplash-image-wrapper'>
          {images.map(
            (image) => <img src={image.urls.regular} 
            className='unsplash-image' 
            onClick={(e) => handleModalDataChange(e, {...modalData, image:image.urls.regular})}/>)}
        </div>

        <img className="success-check" style={{opacity:checkOpacity}} src={checkmark} />

      </Modal>
    )
}

export default Unsplash;