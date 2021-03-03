import 'styled-components';

interface Pallete {
    accent: string;
    main: string;
    background: string;
    tiny: string;
    default: string;
}

interface Gaps {
    medium: string;
}

interface Layout {
    containerWidth: string;
    containerGaps: string;
    gaps: Gaps;
}

interface Radius {
    max: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;
        pallete: Pallete;
        layout: Layout;
        radius: Radius;
    }
}
