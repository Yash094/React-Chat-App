import React, { useState, useEffect, useRef } from 'react'
import Logout from './Logout'
import SendMessage from './SendMsg'
import { db, auth } from '../firebase'

function Chat() {
   const scroll = useRef()
  const [messages, setMessages] = useState([])
  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
      console.log(messages)

    })
  }, [])
 
  return (

    <div>
     
      <div className="msgs">
                {messages.map(({ id, text, photoURL, uid, displayName }) => (
                    <div>
                    
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL ? photoURL : `https://ui-avatars.com/api/?bold=true`} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
      <SendMessage scroll={scroll}/>
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat;