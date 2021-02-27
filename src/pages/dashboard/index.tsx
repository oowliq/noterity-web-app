import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from 'app/layouts/DefaultLayout';
import { PageMeta } from 'app/components';
import { DASHBOARD_PAGE_TITLE } from 'app/constants';

const DashboardPage: NextPage = () => (
    <DefaultLayout>
        <PageMeta title={DASHBOARD_PAGE_TITLE} />
    </DefaultLayout>
);

export default DashboardPage;
