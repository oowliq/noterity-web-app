import React, { FC, HTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

type AppLinkProps = HTMLAttributes<HTMLAnchorElement> & LinkProps;

const Anchor = styled.a`
    text-decoration: none;
`;

const AppLink: FC<AppLinkProps> = ({ href, as, children, ...otherProps }) => (
    <Link href={href} as={as} passHref>
        <Anchor {...otherProps}>{children}</Anchor>
    </Link>
);

export { AppLink };
export default AppLink;
