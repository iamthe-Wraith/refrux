import styled from 'styled-components';

export const AddPostFormContainer = styled.div``;

export const CtasContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        margin-left: 10px;
    }
`;

export const FieldRow = styled.div`
    label {
        display: block;
    }

    input[type='text'],
    textarea {
        width: 100%;
    }

    textarea {
        height: 5rem;
        padding: 5px;
    }
`;
