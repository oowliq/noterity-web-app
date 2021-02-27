import styled from 'styled-components';

interface ContainerProps {
    fluid?: boolean;
}

const Container = styled.div<ContainerProps>`
    max-width: ${(props) => (props.fluid ? 'auto' : props.theme.layout.containerWidth)};
    margin: 0 auto;
    padding: 0 ${(props) => props.theme.layout.containerGaps};
`;

export { Container };
export default Container;
