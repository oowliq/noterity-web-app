import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box, BoxProps } from '.';

export default {
    title: 'Layout/Box',
    component: Box,
} as Meta<BoxProps>;

export const Default: Story<BoxProps> = (args) => <Box {...args} />;
