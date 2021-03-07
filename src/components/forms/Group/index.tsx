import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type GroupProps = HTMLAttributes<HTMLDivElement>;

const Box = styled.div`
    &:not(:last-of-type) {
        margin-bottom: ${(props) => props.theme.layout.gaps.default};
    }
`;

const Group: FC<GroupProps> = (props) => <Box {...props} />;

export { Group };
export default Group;
