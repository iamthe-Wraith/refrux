import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../app/store';
import { LoadingStatus } from '../../types';

export interface IPost {
    id: string;
    date: string;
    title: string;
    content: string;
    userId: string;
}

interface IPostsState {
    posts: IPost[];
    status: LoadingStatus;
    error: string;
}

const initialState: IPostsState = {
    posts: [],
    status: LoadingStatus.Idle,
    error: '',
};

const _postAdded = (state: IPostsState, action: PayloadAction<IPost>) => {
    state.posts.push(action.payload);
};

const _postUpdated = (state: IPostsState, action: PayloadAction<IPost>) => {
    const { id, title, content } = action.payload;
    const existingPost = state.posts.find(post => post.id === id);
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

export const selectAllPosts = (state: RootState) => state.posts;

export const selectPostById = (id: string) => (state: RootState) => state.posts.posts.find(post => post.id === id);

export default postsSlice.reducer;
