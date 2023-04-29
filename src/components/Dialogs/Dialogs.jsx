import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => { 

    let dialogsElements = props. messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = props.messagesPage.messagesData.map(message => <Message message={message.message} key={message.id} />);
    let newMessageText = props.messagesPage.newMessageText;

let onNewMessageChange = (event) => { 
    let body = event.target.value;   
    props.updateNewMessageText(body);
};

let onSendMessageClick = () => {
    props.sendMessage();
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