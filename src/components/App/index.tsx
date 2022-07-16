import React from 'react';
import { AddPostForm } from '../AddPostForm';
import { PostsList } from '../PostsList';
import { AppContainer } from './styles';

interface IProps {
    className?: string;
}

export const App: React.FC<IProps> = ({
    className = '',
}) => (
    <AppContainer className={ className }>
        <AddPostForm />
        <hr />
        <PostsList />
    </AppContainer>
);
