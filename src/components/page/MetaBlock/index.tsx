import Head from 'next/head';
import React, { FC } from 'react';

interface MetaBlockProps {
    title?: string;
}

const MetaBlock: FC<MetaBlockProps> = ({ title }) => <Head>{!!title && <title>{title}</title>}</Head>;

export { MetaBlock };
export default MetaBlock;
