import { ApolloClient, NormalizedCacheObject, ApolloLink, HttpLink } from '@apollo/client';
import { APOLLO_ENDPOINT } from 'app/enviroments';
import isomorphicUnfetch from 'isomorphic-unfetch';
import { useMemo } from 'react';
import cache from './cache';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const isServer = typeof window === 'undefined';

const httpLink = new HttpLink({
    uri: APOLLO_ENDPOINT,
    includeExtensions: true,
    fetch: isomorphicUnfetch,
});

const links = [httpLink];

const createApolloClient = () =>
    new ApolloClient({
        ssrMode: isServer,
        link: ApolloLink.from(links),
        cache,
    });

const initializeApollo = (initialState: NormalizedCacheObject | null = null): ApolloClient<NormalizedCacheObject> => {
    const newApolloClient = apolloClient ?? createApolloClient();
    if (initialState) {
        newApolloClient.cache.restore(initialState);
    }
    if (isServer) return newApolloClient;
    apolloClient = apolloClient ?? newApolloClient;
    return apolloClient;
};

const useApollo = (initialState: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> => {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
};

export { initializeApollo, useApollo };
export default initializeApollo;
