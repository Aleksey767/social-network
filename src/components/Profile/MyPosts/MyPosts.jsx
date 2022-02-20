import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10);


const AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} component={TextArea} name={"newPostText"}
                       placeholder='Post message' className={s.input}
                />

            </div>
            <div>
                <button className={s.btn}>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostForm = reduxForm({form: 'ProfileAddNewPostsForm'})(AddNewPostsForm)
const MyPosts = React.memo((props) => {
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.postsBlock}>
            <h1>My posts</h1>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                <span>{postsElements}</span>
            </div>
        </div>
    )
})


export default MyPosts;