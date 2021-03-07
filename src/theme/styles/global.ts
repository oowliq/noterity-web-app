import { createGlobalStyle } from 'styled-components';

import { base,reset } from './partials';

const GlobalStyles = createGlobalStyle`
    ${reset};
    ${base};
`;

export { GlobalStyles };
export default GlobalStyles;
