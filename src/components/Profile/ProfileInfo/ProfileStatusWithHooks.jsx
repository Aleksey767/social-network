import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (

        <div>
            {!editMode &&
            <div>
                <span onClick={activateMode} className={s.status}>Status: {props.status || "------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode} value={status}/>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;