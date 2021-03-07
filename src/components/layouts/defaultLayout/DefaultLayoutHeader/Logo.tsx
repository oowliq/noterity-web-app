import React, { FC } from 'react';
import styled from 'styled-components';

const Text = styled.span`
    font-family: 'Space Mono';
    font-size: 30px;
    font-weight: 700;
    position: relative;
    top: 0;
    bottom: -5px;
`;

const Logo: FC = () => (
    <div>
        <Text>Noterity</Text>
    </div>
);

export { Logo };
export default Logo;
