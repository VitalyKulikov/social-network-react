import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import { Field, reduxForm } from "redux-form";
//import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = props.messagesPage.messagesData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  //if (!props.isAuth) {
  //      return <Navigate to="/login" />
  //}

  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>{dialogsElements}</div>

      <div className={dialogs.messages}>
        <div> {messagesElements} </div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

let b = "15";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageText"
          plaseholder="Enter your message"
        />
      </div>
      <div className="dialogs">
        <button>Send massage</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
