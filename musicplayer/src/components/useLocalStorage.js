import { useState, useLayoutEffect, useEffect } from "react";

export default function useLocalStorage(key, value) {
    const [state, setState] = useState(value)

    const validSong = localStorage.getItem(key) ? Object.values(JSON.parse(localStorage.getItem(key))).some((item) => item) : false

    useLayoutEffect(() => {
        if (validSong) {
            const data = localStorage.getItem(key)
            setState(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
        }, [state])

    return [state, setState]
}

// const [count, setCount] = useLocalStorage('key', 'state')