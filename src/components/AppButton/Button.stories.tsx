import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AppButton, AppButtonProps } from '.';

export default {
    title: 'Controls/AppButton',
    component: AppButton,
    args: {
        children: 'I am button',
        disabled: false,
    },
    argTypes: {
        variant: {
            control: false,
        },
    },
} as Meta<AppButtonProps>;

export const Default: Story<AppButtonProps> = (args) => <AppButton {...args} />;

export const Primary: Story<AppButtonProps> = (args) => <AppButton {...args} />;

Default.args = {
    variant: 'default',
};

Primary.args = {
    variant: 'primary',
};
