import { Container } from 'app/components/layout';
import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Logo } from './Logo';
import { UserProfile } from './UserProfile';

type DefaultLayoutHeaderProps = HTMLAttributes<HTMLHeadingElement>;

const Header = styled.header`
    background-color: ${(props) => props.theme.pallete.main};
    padding: 1em 0;
    border-bottom: 1px solid ${(props) => props.theme.pallete.tiny};
`;

const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DefaultLayoutHeader: FC<DefaultLayoutHeaderProps> = () => (
    <Header>
        <HeaderContainer>
            <Logo />
            <UserProfile />
        </HeaderContainer>
    </Header>
);

export { DefaultLayoutHeader };
export default DefaultLayoutHeader;
