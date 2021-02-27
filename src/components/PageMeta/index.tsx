import Head from 'next/head';
import React, { FC } from 'react';

interface PageMetaProps {
    title?: string;
}

const PageMeta: FC<PageMetaProps> = ({ title }) => <Head>{!!title && <title>{title}</title>}</Head>;

export { PageMeta };
export default PageMeta;
