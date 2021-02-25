import { ApolloQueryResult, NormalizedCacheObject, QueryOptions } from '@apollo/client';
import { initializeApollo } from 'app/apollo';
import { NextPageContext } from 'next';

export interface PageRequestResultProps<TQuery> {
    response: ApolloQueryResult<TQuery>;
    initialApolloState?: NormalizedCacheObject;
}

const pageRequest = async <TQuery, TVariables>(
    request: QueryOptions<TVariables>,
    context: NextPageContext
): Promise<PageRequestResultProps<TQuery>> => {
    const apolloClient = initializeApollo();

    const response = await apolloClient.query<TQuery, TVariables>({
        query: request.query,
        context: {
            ...request.context,
            req: context.req,
            res: context.res,
        },
        variables: request.variables,
    });

    return { response, initialApolloState: apolloClient.cache.extract() };
};

export { pageRequest };
export default pageRequest;
