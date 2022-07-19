import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface IPost {
    id: string;
    date: string;
    title: string;
    content: string;
    userId: string;
}

const initialState: IPost[] = [
    {
        id: '1',
        date: '2022-07-07T10:59:56.673Z',
        title: 'First Post!',
        content: 'Hello!',
        userId: '1',
    },
    {
        id: '2',
        date: '2022-07-17T10:59:56.673Z',
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
                    date: dayjs().toISOString(),
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
