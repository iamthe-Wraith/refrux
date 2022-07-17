import { nanoid } from '@reduxjs/toolkit';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { IPost, postAdded, postUpdated } from '../../features/posts/postsSlice';
import { CtasContainer, FieldRow, PostFormContainer } from './styles';

interface IProps {
    className?: string;
    post?: IPost;
}

export const PostForm: React.FC<IProps> = ({
    className = '',
    post,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');

    const clear = useCallback(() => {
        setTitle('');
        setContent('');
    }, []);

    const onAddPostClick = useCallback(() => {
        if (!title || !content) return;

        const _post = {
            id: nanoid(),
            title,
            content,
        };

        dispatch(postAdded(_post));
        clear();
    }, [title, content]);

    const onEditPostClick = useCallback(() => {
        if (!post || !title || !content) return;

        const _post = {
            ...post,
            title,
            content,
        };

        dispatch(postUpdated(_post));
        clear();
        navigate(`/posts/${post.id}`);
    }, [title, content]);

    const onContentChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }, []);

    const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);

    return (
        <PostFormContainer className={ className }>
            <form>
                <FieldRow>
                    <label htmlFor='postTitle'>Title:</label>
                    <input
                        type='text'
                        id='postTitle'
                        name='postTitle'
                        value={ title }
                        onChange={ onTitleChange }
                    />
                </FieldRow>
                <FieldRow>
                    <label htmlFor='postContent'>Body:</label>
                    <textarea
                        id='postContent'
                        name='postContent'
                        value={ content }
                        onChange={ onContentChange }
                    />
                </FieldRow>
                <CtasContainer>
                    <button type='button' onClick={ clear }>Clear</button>
                    <button type='button' onClick={ !!post ? onEditPostClick : onAddPostClick }>{ `${!!post ? 'Edit' : 'Add'} Post` }</button>
                </CtasContainer>
            </form>
        </PostFormContainer>
    );
};
