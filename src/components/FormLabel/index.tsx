import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type FormLabelProps = HTMLAttributes<HTMLLabelElement>;

const Label = styled.label`
    margin-bottom: 0.5em;
    display: flex;
    font-weight: 600;
    font-size: 14px;
`;

const FormLabel: FC<FormLabelProps> = (props) => <Label {...props} />;

export { FormLabel };
export default FormLabel;
