import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { PostAuthorContainer } from './styles';

interface IProps {
    className?: string;
    userId: string;
}

export const PostAuthor: React.FC<IProps> = ({
    className = '',
    userId,
}) => {
    const author = useAppSelector(state => state.users.find(user => user.id === userId));

    return (
        <PostAuthorContainer className={ className }>
            { author?.name || 'Unknown' }
        </PostAuthorContainer>
    );
};
