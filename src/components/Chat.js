import './Chat.css'
import { useAuthContext } from '../hooks/useAuthContext'
import MessageBox from './MessageBox'
import { useEffect, useState } from 'react'
import { addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp} from 'firebase/firestore'
import { projectFirestore} from '../firebase/firebase'


export default function Chat() {

  const {user} = useAuthContext() //user
  const [messages, setMessages] = useState(null) //handle messages in text box
  const [curMsg, setCurMsg] = useState('')
  
  //real time update of data
  useEffect(() => {
    const collectionRef = collection(projectFirestore, 'messages')
    const q = query(collectionRef, orderBy('time'))
    const unsub = onSnapshot(q, response => {
        const results = response.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }))
        setMessages(results)
      },(error => console.log(error)))
      return () => unsub()
  }, [])

  //handle submitting messages
  const handleSubmit = (e) => {
    e.preventDefault()
    if (curMsg === '') {
      return
    }
    const collectionRef = collection(projectFirestore, 'messages')
    addDoc(collectionRef, {
      message: curMsg, 
      userDisplayName: user.displayName, 
      userUid: user.uid,
      time: serverTimestamp(),
      pfp: user.photoURL
    }).then(reponse => {
      console.log(reponse)
    }).catch(error => {
      console.log(error)
    })
    setCurMsg('')
  }

  return (
    <div className="chat-popup">

      <MessageBox messages={messages}/>

      {/*For typing the message and sending it*/}
      <form className="form-container">

        <label><b>Message</b></label>
        {user && <textarea 
          placeholder="Type message..." 
          className="msg"
          onChange={e => setCurMsg(e.target.value)}
          value={curMsg}
          maxLength='300'
        > 

        </textarea>}
        {!user && <textarea disabled placeholder="Login to type message.." className="msg"></textarea>}

        {user && <button type="submit" className="btn" onClick={handleSubmit}>Send</button>}
        {!user && <button disabled className="btn-disabled" >Log in to send a message</button>}
      </form>
    </div>
  )
}
