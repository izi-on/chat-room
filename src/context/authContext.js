import { createContext, useEffect, useReducer } from 'react'
import { projectAuth } from '../firebase/firebase'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state, user: null}
        case 'AUTH_IS_READY':
            return {...state, authIsReady: true, user: action.payload}
        default:
            return state
    }
}

export const AuthContextProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    })
    console.log(state)

    useEffect(() => {
        const unsub = projectAuth.onAuthStateChanged((user) => {
            dispatch({type: 'AUTH_IS_READY', payload: user})
            unsub()
        })
    }, [])

    return (
        <AuthContext.Provider value={{... state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}