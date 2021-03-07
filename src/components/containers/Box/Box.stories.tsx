import { Meta,Story } from '@storybook/react';
import React from 'react';

import { Box, BoxProps } from '.';

export default {
    title: 'Containers/Box',
    component: Box,
} as Meta<BoxProps>;

export const Default: Story<BoxProps> = (args) => <Box {...args} />;
