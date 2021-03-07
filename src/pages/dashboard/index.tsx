import { NextPage } from 'next';
import React from 'react';

import { MetaBlock } from '~app/components/page';
import { DASHBOARD_PAGE_TITLE } from '~app/constants';
import DefaultLayout from '~app/layouts/DefaultLayout';

const DashboardPage: NextPage = () => (
    <DefaultLayout>
        <MetaBlock title={DASHBOARD_PAGE_TITLE} />
    </DefaultLayout>
);

export default DashboardPage;
