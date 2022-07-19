import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectUserById } from '../../features/users/usersSlice';
import { PostAuthorContainer } from './styles';

interface IProps {
    className?: string;
    userId: string;
}

export const PostAuthor: React.FC<IProps> = ({
    className = '',
    userId,
}) => {
    const author = useAppSelector(selectUserById(userId));

    return (
        <PostAuthorContainer className={ className }>
            { author?.name || 'Unknown' }
        </PostAuthorContainer>
    );
};
