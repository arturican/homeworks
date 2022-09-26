import React from 'react'
import s from './Message.module.css'

type MessageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageDataPropsType) {
    return (
        <div className={s.chat}>
            <img className={s.image} src={props.avatar}/>
            <div className={s.message}>{props.message}
                <div className={s.name}>{props.name}</div>
                <div className={s.time}>{props.time}</div>
            </div>


        </div>
    )
}

export default Message
