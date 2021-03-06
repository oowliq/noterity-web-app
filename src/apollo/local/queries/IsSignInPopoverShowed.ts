import { gql } from '@apollo/client';

export const IS_SIGN_IN_POPOVER_SHOWED = gql`
    query IsSignInPopoverShowed {
        isSignInPopoverShowed @client
    }
`;

export default IS_SIGN_IN_POPOVER_SHOWED;
