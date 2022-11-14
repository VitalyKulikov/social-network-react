import React from 'react';
import dialogs from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "./" + props.id;
    
    return (
        <div className={dialogs.dialog}>
            <NavLink to={path} > {props.name}</NavLink> 
        </div>
    )
}

const Message = (props) => {
    return(
    <div className={dialogs.message} > {props.message} </div>
    )
}

const Dialogs = () => {
    
    let dialogsData = [
        { id: '1', name: 'Mihail' },
        { id: '2', name: 'Andrey' },
        { id: '3', name: 'Alex' },
        { id: '4', name: 'Victor' },
        { id: '5', name: 'Ivan' },
        { id: '6', name: 'Roman' },
        { id: '7', name: 'Nikolai' }
    ]

    let messagesData = [
        { id: '1', message: 'Hello' },
        { id: '2', message: 'How are you?' },
        { id: '3', message: 'Im fine.' } 
    ]
    
    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messagesData.map(message => <Message message={message.message} />)

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={dialogs.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;