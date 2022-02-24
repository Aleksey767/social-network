import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea,Input} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from '../Dialogs.module.css';

const maxLengthCreator50 = maxLengthCreator(50)
export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className={s.dialogsInput}>
                <Field component={Input} name={"newMessageBody"}
                       validate={[required,maxLengthCreator50]} placeholder='Enter your message'/>
                <button className={s.btn}>Send</button>
            </div>

        </form>
    )
}
export const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)