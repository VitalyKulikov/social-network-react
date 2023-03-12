import React from 'react'; 
import {updateNewMessageTextCreator, sendMessageCreator} from '../../redux/messages-page-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => { 

let state = props.store.getState().messagesPage;

let onNewMessageChange = (body) => { 
    props.store.dispatch(updateNewMessageTextCreator(body));
};

let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
};

    return ( <Dialogs updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state} />)
};

export default DialogsContainer;  