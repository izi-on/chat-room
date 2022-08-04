import './Chat.css'
import { useAuthContext } from '../hooks/useAuthContext'
import MessageBox from './MessageBox'
import { useState } from 'react'

export default function Chat() {

  const {user} = useAuthContext() //user
  const [messages, setMessages] = useState([{
    userDisplayName: "Hristo Sandev",
    message: "I'm done with this shit fr no cap",
    id: "aaaaaaa111111"
  },{
    userDisplayName: "Quandale Dingle",
    message: "Hello guys, Quandale Dingle here",
    id: "aaaaaaaa222222"
  }]) //handle messages in text box

  //handle submitting messages
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="chat-popup">
      <h1>Chat</h1>
      {/*For displaying the messages */}
      <MessageBox messages={messages}/>

      {/*For typing the message and sending it*/}
      <form className="form-container">

        <label><b>Message</b></label>
        {user && <textarea placeholder="Type message.." className="msg"></textarea>}
        {!user && <textarea disabled placeholder="Type message.." className="msg"></textarea>}

        {user && <button type="submit" className="btn">Send</button>}
        {!user && <button disabled className="btn-disabled" onClick={(e) => handleSubmit(e.target.value)}>Log in to send a message</button>}
      </form>
    </div>
  )
}
