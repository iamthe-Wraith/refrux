import React from 'react';
import { PostsList } from '../PostsList';
import { AppContainer } from './styles';

interface IProps {
    className?: string;
}

export const App: React.FC<IProps> = ({
    className = '',
}) => (
    <AppContainer className={ className }>
        <PostsList />
    </AppContainer>
);
