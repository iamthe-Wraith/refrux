import styled from 'styled-components';

export const PostContainer = styled.article`
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 10px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const PostContent = styled.p``;

export const PostHeader = styled.p`
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const PostsListContainer = styled.div``;
