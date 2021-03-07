import React, { FC, LabelHTMLAttributes } from 'react';
import styled from 'styled-components';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const StyledLabel = styled.label`
    margin-bottom: 0.5em;
    display: flex;
    font-weight: 600;
    font-size: 14px;
`;

const Label: FC<LabelProps> = (props) => <StyledLabel {...props} />;

export { Label };
export default Label;
