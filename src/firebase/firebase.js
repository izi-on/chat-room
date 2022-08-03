import { initializeApp } from 'firebase/app'
import firebase from 'firebase/app'
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

const firebaseConfig = {
    apiKey: "AIzaSyB6LcgpDnH9iZlrkr3afJvlkXM3Bl_Fmck",
    authDomain: "chat-room-df272.firebaseapp.com",
    projectId: "chat-room-df272",
    storageBucket: "chat-room-df272.appspot.com",
    messagingSenderId: "964572304462",
    appId: "1:964572304462:web:43bcdac15607bb4be21f1f"
 }

//google auth
const app = initializeApp(firebaseConfig)
export const projectAuth = getAuth(app)
export const provider = new GoogleAuthProvider()

/*
export const SignInWithGoogle = () => {

    signInWithPopup(projectAuth, provider).then((result) => {
        console.log(result)
     }).catch((error) => {
        console.log(error)
     })

}
*/