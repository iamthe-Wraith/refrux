import React from 'react';
import { AddPostForm } from '../../components/AddPostForm';
import { PostsList } from '../../components/PostsList';
import { HomeContainer } from './styles';

interface IProps {
    className?: string;
}

export const Home: React.FC<IProps> = ({
    className = '',
}) => (
    <HomeContainer className={ className }>
        <AddPostForm />
        <hr />
        <PostsList />
    </HomeContainer>
);
