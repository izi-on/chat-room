import { useAuthContext } from '../hooks/useAuthContext'
import './Navbar.css'
import { projectAuth, provider } from '../firebase/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useEffect, useState } from 'react'

export default function Navbar() {

    const {user, dispatch} = useAuthContext()
    const [res, setRes] = useState(null)

    const handleLogout = async () => {
        await projectAuth.signOut()
        dispatch({type:'LOGOUT'})
    }

    const handleLogin = () => {
        signInWithPopup(projectAuth, provider).then((result) => {
            setRes(result)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        if (res) {
            console.log('here2')
            dispatch({type:'LOGIN', payload: res.user})
        }
    }, [res])

  return (
    <div className="navbar">
        <nav>
            <h1>Izi's Chat Room</h1>
            {user && (
                <>
                    <h2>Hello, {user.displayName}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
            {!user && <><h2><button onClick={handleLogin}>Sign in with Google</button></h2></>}
        </nav>
    </div>
    
  )
}
