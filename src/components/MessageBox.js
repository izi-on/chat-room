import './MessageBox.css'
import { useAuthContext } from '../hooks/useAuthContext'

export default function MessageBox({messages}) {

    const {user} = useAuthContext()

    //checks if the message was written by the currently logged in user
    const checkTextAlignIfUser = (userDisplayName) => {
        if (user.displayName == userDisplayName) {
            return true
        }
        return false
    }


  return (
    <div className="text-box">
        {messages && messages.map((message) => (
            <div className="text-bubble" key={message.id}>
                <p className={checkTextAlignIfUser(message.userDisplayName)? "user":"other"}>
                    {message.message}
                </p>
            </div>
        ))}
    </div>
  )
}
