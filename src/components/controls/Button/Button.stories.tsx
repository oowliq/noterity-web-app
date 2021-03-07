import { Meta,Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from '.';

export default {
    title: 'Controls/Button',
    component: Button,
    args: {
        children: 'I am button',
        disabled: false,
    },
    argTypes: {
        variant: {
            control: false,
        },
    },
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
    variant: 'default',
};

Primary.args = {
    variant: 'primary',
};
