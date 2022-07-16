import { nanoid } from '@reduxjs/toolkit';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from '../../features/posts/postsSlice';
import { AddPostFormContainer, CtasContainer, FieldRow } from './styles';

interface IProps {
    className?: string;
}

export const AddPostForm: React.FC<IProps> = ({
    className = '',
}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const clear = useCallback(() => {
        setTitle('');
        setContent('');
    }, []);

    const onAddPostClick = useCallback(() => {
        if (!title || !content) return;

        const post = {
            id: nanoid(),
            title,
            content,
        };

        dispatch(postAdded(post));
        clear();
    }, [title, content]);

    const onContentChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }, []);

    const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);

    return (
        <AddPostFormContainer className={ className }>
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
                    <button type='button' onClick={ onAddPostClick }>Add Post</button>
                </CtasContainer>
            </form>
        </AddPostFormContainer>
    );
};
