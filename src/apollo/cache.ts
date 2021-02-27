import { InMemoryCache } from '@apollo/client';
import { isModalShowed } from './local/reactive';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isModalShowed: {
                    read: () => isModalShowed(),
                },
            },
        },
    },
});

export { cache };
export default cache;
