import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
    pallete: {
        accent: '#f19066',
        main: '#fff',
        background: '#f1f2f6',
        tiny: '#eaeaea',
        default: '#27303A',
    },
    layout: {
        containerWidth: '1200px',
        containerGaps: '1em',
        gaps: {
            medium: '2em',
        },
    },
    radius: {
        max: '20em',
    },
};

export { lightTheme };
export default lightTheme;
