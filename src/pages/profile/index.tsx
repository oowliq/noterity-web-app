import { AppLink, PageMeta } from 'app/components';
import { DASHBOARD_ROUTE } from 'app/constants';
import DefaultLayout from 'app/layouts/DefaultLayout';
import { NextPage } from 'next';
import React from 'react';

const ProfilePage: NextPage = () => (
    <DefaultLayout>
        <PageMeta title="Profile page" />
        <div>Profile page</div>
        <AppLink href={DASHBOARD_ROUTE}>Go to main page</AppLink>
    </DefaultLayout>
);

export default ProfilePage;
