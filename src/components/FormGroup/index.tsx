import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type FormGroupProps = HTMLAttributes<HTMLDivElement>;

const Group = styled.div`
    &:not(:last-of-type) {
        margin-bottom: ${(props) => props.theme.layout.gaps.default};
    }
`;

const FormGroup: FC<FormGroupProps> = (props) => <Group {...props} />;

export { FormGroup };
export default FormGroup;
