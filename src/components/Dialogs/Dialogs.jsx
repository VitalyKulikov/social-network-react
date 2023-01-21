import React from 'react';
import dialogs from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message} />)

    let newMessageElement = React.createRef();

    let addMassege = () => {
        let textMessage = newMessageElement.current.value;
        alert (textMessage);
    }

    return (
    

        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={dialogs.messages}>
                {messagesElements}
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMassege}>Add massage</button>
            </div>
            </div>
            
        </div>
    )
}

export default Dialogs;