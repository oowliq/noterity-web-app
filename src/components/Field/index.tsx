import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface FieldProps extends HTMLAttributes<HTMLInputElement> {}

const Box = styled.div`
    border: 2px solid ${(props) => props.theme.pallete.tiny};
    border-radius: ${(props) => props.theme.radius.default};
    transition: border 0.1s ease-in;

    &:focus-within {
        border-color: ${(props) => props.theme.pallete.accent};
    }
`;

const Input = styled.input`
    padding: 0.7em 1em;
    width: 100%;

    &::placeholder {
        color: ${(props) => props.theme.pallete.placeholder};
    }
`;

const Field: FC<FieldProps> = (props) => {
    return (
        <Box>
            <Input type="text" {...props} />
        </Box>
    );
};

export { Field };
export default Field;
