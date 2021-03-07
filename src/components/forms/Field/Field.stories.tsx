import { Meta,Story } from '@storybook/react';
import React from 'react';

import { Field, FieldProps } from '.';

export default {
    title: 'Forms/Field',
    component: Field,
    args: {
        value: 'I am Field',
        placeholder: 'Placeholder',
    },
    argTypes: {
        variant: {
            control: false,
        },
    },
} as Meta<FieldProps>;

export const Default: Story<FieldProps> = (args) => <Field {...args} />;
