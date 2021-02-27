import { css } from 'styled-components';

const base = css`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        font-family: 'Nunito';
    }

    html,
    body,
    #__next {
        height: 100%;
    }
`;

export { base };
export default base;
