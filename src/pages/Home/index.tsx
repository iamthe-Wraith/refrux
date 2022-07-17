import React from 'react';
import { PostForm } from '../../components/PostForm';
import { PostsList } from '../../components/PostsList';
import { HomeContainer } from './styles';

interface IProps {
    className?: string;
}

export const Home: React.FC<IProps> = ({
    className = '',
}) => (
    <HomeContainer className={ className }>
        <PostForm />
        <hr />
        <PostsList />
    </HomeContainer>
);
