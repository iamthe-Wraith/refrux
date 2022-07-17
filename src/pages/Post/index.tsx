import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { PostContainer } from './styles';

interface IProps {
    className?: string;
}

export const Post: React.FC<IProps> = ({
    className = '',
}) => {
    const params = useParams();
    const post = useAppSelector(state => state.posts.find(p => p.id === params.postId));

    if (!post) {
        return (
            <div>Post not found...</div>
        );
    }

    return (
        <PostContainer className={ className }>
            <Link to='/'>Home</Link>
            <h1>{ post.title }</h1>
            <p>{ post.content }</p>
        </PostContainer>
    );
};