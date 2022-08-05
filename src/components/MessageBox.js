import './MessageBox.css'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect, useRef } from 'react'

export default function MessageBox({messages}) {

    const {user} = useAuthContext()
    const bottomRef = useRef(null)

    //checks if the message was written by the currently logged in user
    const checkTextAlignIfUser = (userUid) => {
        if (!user) {return false}
        if (user.uid == userUid) {
            return true
        }
        return false
    }
    
    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);

  return (
    <div className="text-box">
        {messages && messages.map((message) => (
            <div key={message.id} className = {"text-comp"+(checkTextAlignIfUser(message.userUid)?" user":"")}>

                {!checkTextAlignIfUser(message.userUid) && <img src={message.pfp} alt="display image"/>}
                
                <div className="text-bubble" key={message.id}>
                    
                    {message.message}
                    
                </div>

                {checkTextAlignIfUser(message.userUid) && <img src={message.pfp} alt="display image"/>}

            </div>
        ))}
        <div ref={bottomRef}></div>
    </div>
  )
}
