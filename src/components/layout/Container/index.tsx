import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    fluid?: boolean;
}

const Box = styled.div<Pick<ContainerProps, 'fluid'>>`
    max-width: ${(props) => (props.fluid ? 'auto' : props.theme.layout.containerWidth)};
    margin: 0 auto;
    padding: 0 ${(props) => props.theme.layout.containerGaps};
`;

const Container: FC<ContainerProps> = (props) => <Box {...props} />;

export { Container };
export default Container;
