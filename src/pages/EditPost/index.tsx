import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { PostForm } from '../../components/PostForm';
import { EditPostContainer } from './styles';

interface IProps {
    className?: string;
}

export const EditPost: React.FC<IProps> = ({
    className = '',
}) => {
    const params = useParams();
    const post = useAppSelector(state => state.posts.find(p => p.id === params.postId));

    return (
        <EditPostContainer className={ className }>
            <Link to='/'>Home</Link>
            <PostForm post={ post } />
        </EditPostContainer>
    );
};
