import React from 'react'
import './css/Instructions.css'
import tl from '../Images/toggle-library.png'
import addSong from '../Images/add-song.png'
import modalAdd from '../Images/modal-add.png'
import choose from '../Images/choose.png'
import modal from '../Images/modal.png'
import unsplash from '../Images/unsplash.png'
import spotify from '../Images/spotify.png'
import deleteMouseHover from '../Images/delete-mouse-hover.png'
import mouseDelete from '../Images/mouse-delete.png'
import downArrow from '../Images/downArrow.png'

function Instructions() {
    return (
        <div className='article-wrapper'>
            <h1 style={{fontSize:'4rem'}}>Tutorials</h1>
            <article className='how-to-add'>
                <h1>How To Add A Song</h1>
                <div>
                    <li>Click on the <mark>Toggle Library</mark> button</li>
                    <img src={tl} />
                    <li>Click on the <mark>Add Song</mark> button</li>
                    <img src={addSong} style={{width:'13rem', height: '3.5rem'}} />
                    <li>Fill out the form with the title, artist, image file, or audio file</li>
                    <img src={modal} style={{width:'15rem', height: '18rem'}} />
                    <li>If you don't have an audio file or image, you can click <mark>Choose</mark> to use some sample files from Unsplash and Spotify (the spotify songs are only 30 second previews)</li>
                    <img src={choose} style={{width:'10rem', height: '5rem'}} />
                    <li>Click <mark>Add</mark> and view the library</li>
                    <img src={modalAdd} style={{width:'10rem', height: '3rem'}} />
                </div>
            </article>

            <img src={downArrow} style={{width:'5rem', height:'5rem'}}/>

            <article className='how-to-delete'>
                <h1>How To Delete A Song</h1>
                <div>
                    <li>Hover over the red square in the corner of each song card in the library</li>
                    <img src={deleteMouseHover} style={{width:'15rem', height: '24rem'}} />
                    <li>Click anywhere in the area where the red square expands</li>
                    <img src={mouseDelete} style={{width:'15rem', height: '20rem'}} />
                </div>
            </article>
        </div>
    )
}

export default Instructions
