import { gql } from '@apollo/client';

export const IS_MODAL_SHOWED = gql`
    query IsModalShowed {
        isModalShowed @client
    }
`;

export default IS_MODAL_SHOWED;
