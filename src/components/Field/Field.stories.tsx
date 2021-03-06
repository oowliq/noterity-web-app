import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Field, FieldProps } from '.';
import AppButton from '../AppButton';

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

export const Default: Story<FieldProps> = (args) => (
    <div style={{ maxWidth: 300, display: 'flex', alignItems: 'flex-start' }}>
        <Field {...args} />
        <AppButton style={{ marginLeft: '1em' }}>Hello</AppButton>
    </div>
);
