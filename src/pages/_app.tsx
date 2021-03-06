import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useApollo } from '~app/apollo/client';
import { lightTheme } from '~app/theme';
import GlobalStyles from '~app/theme/styles/global';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    const client = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="viewport" content="width=device-width, maximum-scale=1.0, shrink-to-fit=no" />
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default MyApp;
