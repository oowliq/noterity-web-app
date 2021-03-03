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
        color: ${(props) => props.theme.pallete.default};
    }

    body {
        background-color: ${(props) => props.theme.pallete.background};
        font-size: 16px;
    }

    html,
    body,
    #__next {
        height: 100%;
    }
`;

export { base };
export default base;
