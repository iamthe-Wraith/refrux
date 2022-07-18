import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export interface IPost {
    id: string;
    title: string;
    content: string;
    userId: string;
}

const initialState: IPost[] = [
    {
        id: '1',
        title: 'First Post!',
        content: 'Hello!',
        userId: '1',
    },
    {
        id: '2',
        title: 'Second Post',
        content: 'More text',
        userId: '0',
    },
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
        postAdded: {
            reducer: _postAdded,
            prepare: (title: string, content: string, userId: string) => ({
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId,
                },
            }),
        },
        postUpdated: _postUpdated,
    },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
