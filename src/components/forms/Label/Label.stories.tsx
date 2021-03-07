import { Meta,Story } from '@storybook/react';
import React from 'react';

import { Label, LabelProps } from '.';

export default {
    title: 'Forms/Label',
    component: Label,
    args: {
        children: 'I am Label',
    },
} as Meta<LabelProps>;

export const Default: Story<LabelProps> = (args) => <Label {...args} />;
