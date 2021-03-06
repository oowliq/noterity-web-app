import 'styled-components';

interface Pallete {
    accent: string;
    main: string;
    placeholder: string;
    background: string;
    tiny: string;
    default: string;
}

interface Gaps {
    medium: string;
    default: string;
}

interface Layout {
    containerWidth: string;
    containerGaps: string;
    gaps: Gaps;
}

interface Radius {
    max: string;
    default: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;
        pallete: Pallete;
        layout: Layout;
        radius: Radius;
    }
}
