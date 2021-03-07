import { MetaBlock } from 'app/components/page';
import { DASHBOARD_PAGE_TITLE } from 'app/constants';
import DefaultLayout from 'app/layouts/DefaultLayout';
import { NextPage } from 'next';
import React from 'react';

const DashboardPage: NextPage = () => (
    <DefaultLayout>
        <MetaBlock title={DASHBOARD_PAGE_TITLE} />
    </DefaultLayout>
);

export default DashboardPage;
