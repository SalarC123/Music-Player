import React, {useState, useEffect} from 'react'

function Unsplash() {
    const [images, setImages] = useState('')
    useEffect(() => {
      fetch('https://api.unsplash.com/photos/?client_id=' + 'afLognfbE84vRrC-Lf6ygcqw9m6jf5-td6b5PiXUvyk')
      .then(res => res.json())
      .then(data => {setImages(data);console.log(data)})
    }, [])

    return (
        <></>
    )
}

export default Unsplash;