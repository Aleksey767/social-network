import React from "react";
import s from "./ProfileInfo.module.css";
import {Input, TextArea} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit,profile, error}) => {
    return <form onSubmit={handleSubmit}>

        {error && <div className="formSummaryError">
            {error}</div>}

        <b>Full name:</b><Field placeholder={"Your Name"} component={Input} name={'fullName'}
                                validate={[required]} type={"text"}/>

        <b>About me:</b><Field placeholder={"Type here"} component={TextArea} name={'aboutMe'}
                                validate={[required]}/>

        <b>Looking for a job?:</b><Field placeholder={"Type here"} component={Input} name={'lookingForAJob'}
                                type={"checkbox"}/>

        <b>My professional skills:</b><Field placeholder={"Type here"} component={TextArea} name={'lookingForAJobDescription'}/>

        <b>Contacts:</b>{Object.keys(profile.contacts).map(key=>{
        return <div key={key}>
            <b>{key}:</b><Field placeholder={key} component={Input} name={'contacts.'+key}
                                type={"text"}/>
        </div>
    })}

        <button>Save</button>
    </form>

}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm