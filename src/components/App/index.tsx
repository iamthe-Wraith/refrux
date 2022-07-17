import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Post } from '../../pages/Post';
import { AppContainer } from './styles';

interface IProps {
    className?: string;
}

export const App: React.FC<IProps> = ({
    className = '',
}) => (
    <AppContainer className={ className }>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/posts/:postId' element={ <Post /> } />
            </Routes>
        </BrowserRouter>
    </AppContainer>
);
