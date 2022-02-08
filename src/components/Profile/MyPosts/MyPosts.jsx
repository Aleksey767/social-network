import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h1>My posts</h1>
            <div>
                <div>
                    <textarea placeholder='Your post' className={s.input} onChange={ onPostChange } ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button className={s.btn} onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <span>{ postsElements }</span>
            </div>
        </div>
    )
}

export default MyPosts;