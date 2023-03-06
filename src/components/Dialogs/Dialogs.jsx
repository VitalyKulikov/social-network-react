import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageTextCreator, sendMessageCreator} from '../../redux/messages-page-reduser';

const Dialogs = (props) => { 

    let dialogsElements = props.messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messagesPage.messagesData.map(message => <Message message={message.message} />);
    let newMessageText = props.messagesPage.newMessageText;

let onNewMessageChange = (event) => { 
    let body = event.target.value;   
    props.dispatch(updateNewMessageTextCreator(body));
};

let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
};

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={dialogs.messages}>
               <div> {messagesElements}  </div> 
            <div>
                 <textarea onChange={onNewMessageChange} 
                 value={newMessageText} >
                 </textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick} >Send massage</button>
            </div>
            </div>
            
        </div>
    )
};

export default Dialogs;