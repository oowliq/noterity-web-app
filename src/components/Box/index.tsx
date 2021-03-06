import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type BoxProps = HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div<BoxProps>`
    background-color: ${(props) => props.theme.pallete.main};
    border-radius: ${(props) => props.theme.radius.default};
    box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 16%);
    padding: ${(props) => props.theme.layout.gaps.medium};
`;

const Box: FC<BoxProps> = (props) => <Wrapper {...props} />;

export { Box };
export default Box;
