import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { PostAuthor } from '../../components/PostAuthor';
import { TimeAgo } from '../../components/TimeAgo';
import { selectPostById } from '../../features/posts/postsSlice';
import { PostContainer } from './styles';

interface IProps {
    className?: string;
}

export const Post: React.FC<IProps> = ({
    className = '',
}) => {
    const params = useParams();
    const post = useAppSelector(selectPostById(params.id as string));

    if (!post) {
        return (
            <div>Post not found...</div>
        );
    }

    return (
        <PostContainer className={ className }>
            <Link to='/'>Home</Link>
            <h1>{ post.title }</h1>
            <PostAuthor userId={ post.userId } />
            <TimeAgo date={ post.date } />
            <p>{ post.content }</p>
        </PostContainer>
    );
};
