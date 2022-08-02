import { initializeApp } from 'firebase/app'
import firebase from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

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

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
     signInWithPopup(projectAuth, provider).then((result) => {
        console.log(result)
     }).catch((error) => {
        console.log(error)
     })
}