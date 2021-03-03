import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from 'app/theme';

const SbStyles = createGlobalStyle`
    body {
        background: none;
    }
`;

export const decorators = [
    (Story) => (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <SbStyles />
            <Story />
        </ThemeProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};
