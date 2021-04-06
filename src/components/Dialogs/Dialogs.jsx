import React from 'react';
import DialogItem from './DIalogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';



const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = state.messages.map ( m => <Message key={m.id} message={m.message}/>);
    
    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = ''
    }
    return (
        <div className={s.dialogs}>
            <div>{dialogsElements}</div>
            <div>
                {messageElements}
                <MessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}


const DialogsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.sendMessage}>
            <Field placeholder='Enter your message' component={"textarea"} name="newMessageBody"/>
            <button>Send message</button>
        </form>
    )
}

const MessageFormRedux = reduxForm({form: "dialogMessageForm"})(DialogsForm)


export default Dialogs;