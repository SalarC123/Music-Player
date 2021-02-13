import React, {createContext, useState} from 'react';

export const SongContext = createContext()

export const SongProvider = (props) => {
    const [songInfo, setSongInfo] = useState({
        name:'The Imperial March', 
        artist:'Star Wars', 
        favorite:true, 
        image:'https://img.discogs.com/jfd67zp0YMx9bZbTeo8Bq9bBY5s=/fit-in/600x466/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1044605-1585675404-6797.jpeg.jpg',
        audio: 'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav'
    })

    return (
        <SongContext.Provider value = {[songInfo, setSongInfo]}>
            {props.children}
        </SongContext.Provider>
    )
}