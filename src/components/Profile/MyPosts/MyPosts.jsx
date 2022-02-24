import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";






const MyPosts = React.memo(({profile, posts, addPost,isOwner}) => {
    let postsElements =
        [...posts]
            .reverse()
            .map(p => <Post profile={profile} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        addPost(values.newPostText);
    }


    return (
        <div className={s.formAddPost}>

            <AddNewPostForm isOwner={isOwner} onSubmit={onAddPost}/>
            <div className={s.posts}>
                <span>{postsElements}</span>
            </div>
        </div>
    )
})

let maxLength50 = maxLengthCreator(50);

const AddNewPostsForm = (props) => {
    return (
        <div>{props.isOwner&&
            <form className={s.formPosts} onSubmit={props.handleSubmit}>

                <h1>My posts</h1>
                <Field className={s.inputPosts} validate={[required, maxLength50]} component={TextArea} name={"newPostText"}
                       placeholder='Post message'/>
                <div>
                    <button className={s.btn}>Add post</button>
                </div>

            </form>   }
        </div>
    )
}
const AddNewPostForm = reduxForm({form: 'ProfileAddNewPostsForm'})(AddNewPostsForm)

export default MyPosts;