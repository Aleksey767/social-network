import profileReducer, {addPostActionCreator,deletePost} from "./profile-reducer"

let state = {
    posts: [
        {id: 1, message: 'Post #1 - John Lennon!', likesCount: 12},
        {id: 2, message: 'Post #2 - Mike Jagger!', likesCount: 111},
        {id: 3, message: 'Post #3 - Chester Bennington!', likesCount: 11111},
        {id: 4, message: 'Post #4 - Kurt Cobaine!', likesCount: 112323}
    ]
}

it('new post shold be added', () => {
    let action = addPostActionCreator("TestProfileReducer");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
})

it('new desc is OK', () => {
    let action = addPostActionCreator("TestProfileReducer");

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe('TestProfileReducer');
});

it('decrement posts is OK', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})