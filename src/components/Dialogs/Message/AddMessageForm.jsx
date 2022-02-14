import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
const maxLengthCreator50 = maxLengthCreator(50)
export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={TextArea} name={"newMessageBody"}
                       validate={[required,maxLengthCreator50]} placeholder='Enter your message'/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)