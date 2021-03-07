import {useReducer, createContext} from 'react';

export const VisibilityContext = createContext()

export const VisibilityProvider = (props) => {

  // specify action and payload
  // for example --> dispatch({type:'show', payload:'modalVisibility'})

  // when using state, use --> visibility.modalVisibility
  const reducer = (visibility, action) => {
    switch(action.type) {
        case 'show':
            return {...visibility, [action.payload]:true};
            break;
        case 'hide':
            return {...visibility, [action.payload]:false};
            break;
    }
}

  const [visibility, dispatch] = useReducer(
      reducer,
      {
          modalVisibility:false,
          playlistModalVisibility:false,
          unsplashVisibility:false,
          spotifyVisibility:false,
        //   hamburgerVisibility:false
    })

  return (
      <VisibilityContext.Provider value={[visibility, dispatch]}>
          {props.children}
      </VisibilityContext.Provider>
  )

}