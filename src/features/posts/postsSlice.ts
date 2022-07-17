import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPost {
    id: string;
    title: string;
    content: string;
}

const initialState: IPost[] = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' },
];

const _postAdded = (state: IPost[], action: PayloadAction<IPost>) => {
    state.push(action.payload);
};

const _postUpdated = (state: IPost[], action: PayloadAction<IPost>) => {
    const { id, title, content } = action.payload;
    const existingPost = state.find(post => post.id === id);
    if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
    }
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: _postAdded,
        postUpdated: _postUpdated,
    },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
