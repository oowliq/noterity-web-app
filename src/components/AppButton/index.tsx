import React, { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

type AppButtonVariant = 'primary' | 'default';

type AppButtonStyleProps = Pick<AppButtonProps, 'variant' | 'active'>;

export interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: AppButtonVariant;
    active?: boolean;
}

const defaultButtonHoverStyles = css`
    color: ${(props) => props.theme.pallete.accent};
    &::before {
        margin: 2px;
    }
`;

const getPrimaryStyles = () => css`
    background-color: ${(props) => props.theme.pallete.accent};
    color: ${(props) => props.theme.pallete.main};
    background: ${(props) =>
        `linear-gradient(166deg,  ${props.theme.pallete.accent} 25%, ${darken(0.1, props.theme.pallete.accent)} 85%)`};

    &:disabled {
        background: ${(props) => lighten(0.25, props.theme.pallete.accent)};
    }
`;

const getVariantStyles = (dto: AppButtonStyleProps) => {
    switch (dto.variant) {
        case 'primary':
            return getPrimaryStyles();
        case 'default':
            return css`
                position: relative;
                ${getPrimaryStyles()};
                z-index: 0;
                color: ${(props) => props.theme.pallete.default};
                &::before {
                    content: '';
                    ${getPrimaryStyles()};
                    border-radius: 0;
                    transition: margin 0.2s ease-in;
                    background: ${(props) => props.theme.pallete.main};
                    border-radius: 2px;
                    position: absolute;
                    z-index: -1;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: -2px;
                }

                &:hover:not(:disabled) {
                    ${defaultButtonHoverStyles};
                }

                ${dto.active && defaultButtonHoverStyles};

                &:disabled {
                    background: ${(props) => lighten(0.25, props.theme.pallete.accent)};
                    color: ${(props) => lighten(0.25, props.theme.pallete.accent)};
                    &::before {
                        margin: 2px;
                    }
                }
            `;
        default:
            return css``;
    }
};

const Button = styled.button<AppButtonStyleProps>`
    position: relative;
    top: 0;
    border-radius: 4px;
    padding: 0.9em 2em;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    transition: top 0.1s ease-in, margin 0.2s ease-in, color 0.2s ease-in;

    &:not(:first-of-type) {
        margin-left: 0.4em;
    }
    &:not(:last-of-type) {
        margin-right: 0.4em;
    }

    &:active:not(:disabled) {
        top: 2px;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${(props) => getVariantStyles(props)};
`;

const AppButton: FC<AppButtonProps> = ({ variant = 'primary', ...otherProps }) => (
    <Button {...otherProps} variant={variant} />
);

export { AppButton };
export default AppButton;
