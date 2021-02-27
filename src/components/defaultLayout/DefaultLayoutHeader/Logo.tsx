import React, { FC } from 'react';
import styled from 'styled-components';
import { AppLink } from 'app/components';
import { DASHBOARD_ROUTE } from 'app/constants';

const Source = styled.img`
    max-width: 150px;
`;

const Logo: FC = () => (
    <AppLink href={DASHBOARD_ROUTE} title="Dashboard page">
        <Source src="/assets/logo.svg" />
    </AppLink>
);

export { Logo };
export default Logo;
