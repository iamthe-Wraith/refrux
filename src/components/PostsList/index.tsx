import React, { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
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
    const posts = useAppSelector(state => state.posts);

    const renderedPosts = useMemo(() => posts.map(post => (
        <PostContainer key={ post.id }>
            <PostHeader to={ `/posts/${post.id}` }>{ post.title }</PostHeader>
            <PostContent>{ post.content }</PostContent>
        </PostContainer>
    )), [posts]);

    return (
        <PostsListContainer className={ className }>
            { renderedPosts }
        </PostsListContainer>
    );
};
