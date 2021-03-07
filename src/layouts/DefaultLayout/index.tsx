import { DefaultLayoutHeader } from 'app/components/layouts/defaultLayout';
import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

type DefaultLayoutProps = HTMLAttributes<HTMLDivElement>;

const Layout = styled.div``;

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => (
    <Layout>
        <DefaultLayoutHeader />
        {children}
    </Layout>
);

export { DefaultLayout };
export default DefaultLayout;
