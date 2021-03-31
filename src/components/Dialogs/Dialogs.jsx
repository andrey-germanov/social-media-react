import React from 'react';
import DialogItem from './DIalogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';



const Dialogs = (props) => {

    let state = props.dialogsPage;
    
    let messageElements = state.messages.map ( m => <Message key={m.id} message={m.message}/>);
    let dialogsElements = state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div>{dialogsElements}</div>
            <div>
                {messageElements}
                <div className={s.sendMessage}>
                    <textarea onChange={onNewMessageChange} placeholder='Enter your message' value={newMessageBody}></textarea>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;