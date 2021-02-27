import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AppButton, AppButtonProps } from '.';

export default {
    title: 'Controls/AppButton',
    component: AppButton,
    args: {
        children: 'I am button',
    },
} as Meta<AppButtonProps>;

const Template: Story<AppButtonProps> = (args) => <AppButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
