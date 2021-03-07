import { InMemoryCache } from '@apollo/client';

import { isSignInPopoverShowed } from './local/reactive';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isSignInPopoverShowed: {
                    read: () => isSignInPopoverShowed(),
                },
            },
        },
    },
});

export { cache };
export default cache;
