import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../app/hooks';
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
    const users = useAppSelector(state => state.users);
    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');
    const [userId, setUserId] = useState(post?.userId || users[0].id);

    const clear = useCallback(() => {
        setTitle('');
        setContent('');
        if (!post) setUserId(users[0].id);
    }, []);

    const onAddPostClick = useCallback(() => {
        if (!title || !content || !userId) return;

        dispatch(postAdded(title, content, userId));
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

    const onUserIdChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setUserId(e.target.value);
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
                <FieldRow>
                    <label htmlFor='postUserId'>User:</label>
                    <select
                        id='postUserId'
                        name='postUserId'
                        disabled={ !!post }
                        value={ userId }
                        onChange={ onUserIdChange }
                    >
                        { users.map(user => (
                            <option key={ user.id } value={ user.id }>
                                { user.name }
                            </option>
                        )) }
                    </select>
                </FieldRow>
                <CtasContainer>
                    <button type='button' onClick={ clear }>Clear</button>
                    <button type='button' onClick={ !!post ? onEditPostClick : onAddPostClick }>{ `${!!post ? 'Edit' : 'Add'} Post` }</button>
                </CtasContainer>
            </form>
        </PostFormContainer>
    );
};
