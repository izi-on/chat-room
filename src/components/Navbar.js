//style
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from '../hooks/useAuthContext'
import './Navbar.css'

export default function Navbar() {

    const {user} = useAuthContext()


  return (
    <div className="navbar">
        <nav>
            <h1>Izi's Chat Room</h1>
            {user && <h2>Hello, {user.displayName}</h2>}
            {!user && <button>Sign in with Google</button>}
        </nav>
    </div>
    
  )
}
