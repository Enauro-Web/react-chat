import { onSnapshot, doc } from 'firebase/firestore'
import {db} from '../firebase'
import React, {useState} from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { ChatContext } from './context/ChatContext'
import Message from './Message'

const Messages = () => {
  const {data} = useContext(ChatContext);
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const unsub = onSnapshot(doc(db,"chats", data.chatId), doc => {
      doc.exists() && setMessages(doc.data().messages);
    })

    return () => {
      unsub()
    }
  },[data.chatId])
  return (
    <div className='messages'>
      {messages.map(m=>(
        <Message message={m} key={m.id} />
      ))}        
    </div>
  )
}

export default Messages