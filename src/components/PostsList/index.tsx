import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectAllPosts } from '../../features/posts/postsSlice';
import { PostAuthor } from '../PostAuthor';
import { TimeAgo } from '../TimeAgo';
import {
    PostContainer,
    PostContent,
    PostHeader,
    PostsListContainer,
} from './styles';

interface IProps {
    className?: string;
}

export const PostsList: React.FC<IProps> = ({
    className = '',
}) => {
    const { posts } = useAppSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = useMemo(() => orderedPosts.map(post => (
        <PostContainer key={ post.id }>
            <PostHeader to={ `/posts/${post.id}` }>{ post.title }</PostHeader>
            <PostContent>{ post.content }</PostContent>
            <PostAuthor userId={ post.userId } />
            <TimeAgo date={ post.date } />
            <Link to={ `/editPost/${post.id}` }>Edit</Link>
        </PostContainer>
    )), [posts]);

    return (
        <PostsListContainer className={ className }>
            { renderedPosts }
        </PostsListContainer>
    );
};
