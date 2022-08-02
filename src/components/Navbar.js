//style
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from '../hooks/useAuthContext'
import './Navbar.css'

export default function Navbar() {

    const {user} = useAuthContext()


  return (
    <ul>
        <label>Izi's Chat Room</label>
        {user && <li disabled>Hello, {user.displayName}</li>}
        {!user && <li></li>}
    </ul>
  )
}
