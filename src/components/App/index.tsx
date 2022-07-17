import React from 'react';
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import { EditPost } from '../../pages/EditPost';
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
                <Route path='/editPost/:postId' element={ <EditPost /> } />
                <Route path='*' element={ <Navigate to='/' /> } />
            </Routes>
        </BrowserRouter>
    </AppContainer>
);
