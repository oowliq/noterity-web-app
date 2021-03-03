import React, { FC } from 'react';
import styled from 'styled-components';
import { AppLink } from 'app/components';
import { DASHBOARD_ROUTE } from 'app/constants';

const Source = styled.img`
    max-width: 150px;
`;

const Text = styled.span`
    font-family: 'Space Mono';
    font-size: 30px;
    font-weight: 700;
    position: relative;
    top: 0;
    bottom: -5px;
`;

const SubText = styled(Text)`
    font-weight: 400;
    margin-left: 5px;
    position: relative;
    top: 5px;
`;

const Logo: FC = () => (
    <AppLink href={DASHBOARD_ROUTE} title="Dashboard page">
        {/* <Source src="/assets/logo.svg" /> */}
        <Text>
            Note<SubText>rity</SubText>
        </Text>
    </AppLink>
);

export { Logo };
export default Logo;
