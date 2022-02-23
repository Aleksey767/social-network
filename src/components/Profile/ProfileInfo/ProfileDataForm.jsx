import React from "react";
import s from "./ProfileDataForm.module.css";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form className={s.profileForm} onSubmit={handleSubmit}>

        {error && <div className="formSummaryError">
            {error}</div>}

        <div className={s.inputItem}>Full name:<Field className={s.inputProfile} placeholder={"Your Name"}
                                                      component={Input} name={'fullName'}
                                                      validate={[required]} type={"text"}/></div>

        <div className={s.inputItem}>About me:
        <Field className={s.inputProfile} placeholder={"Type here"} component={Input} name={'aboutMe'}
               validate={[required]} type={"text"}/></div>

        <div className={s.inputItem}>Looking for a job?:
        <Field className={s.profileCheckbox} component={Input} name={'lookingForAJob'}
               type={"checkbox"}/></div>

        <div className={s.inputItem}>My professional skills:
        <Field className={s.inputProfile} type={"text"} placeholder={"Type here"} component={Input}
               name={'lookingForAJobDescription'}/></div>

        <div className={s.inputItem}><span className={s.contactsTitle}>Contacts:</span>
        {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <div className={s.contactTitle}>{key}:</div><Field className={s.inputProfile} placeholder={key} component={Input} name={'contacts.' + key}
                                    type={"text"}/>
            </div>
        })}

        <button className={s.btn}>Save</button></div>
    </form>

}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm