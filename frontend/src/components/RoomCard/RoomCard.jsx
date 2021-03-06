import React from 'react'
import styles from "./RoomCard.module.css"
import {useHistory} from "react-router-dom"



function RoomCard({room}) {
  const history = useHistory()

  return (
    <div onClick={() => history.push(`/room/${room.id}`)} className={styles.card}>
        <h3 className={styles.topic}>{room.topic}</h3> 
        <div className={`${styles.speakers} ${room.speakers.length === 1 ? styles.singleSpeaker : ''}`}>
            <div className={styles.avatar}>
                {
                    room.speakers.map(speaker => (
                        <img key={speaker.id} src={speaker.avatar} alt="speaker-avatar" />
                    ))
                } 
            </div>
            <div className={styles.names}>
                {
                    room.speakers.map(speaker => (
                        <div key={speaker.id} className={styles.namesWrapper}>
                            <span>{speaker.name}</span>
                            <img src='/images/chat-bubble.png' alt="chat bubble" />
                        </div>
                    ))
                }
            </div>
        </div>
        <div className={styles.peopleCount}>
            <span>{room.speakers.length}</span>
            <img src='/images/user.png' alt="user image" />
        </div>
    </div>
  )
}

export default RoomCard