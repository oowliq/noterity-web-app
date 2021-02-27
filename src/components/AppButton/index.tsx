import React, { FC, HTMLAttributes } from 'react';

export interface AppButtonProps extends HTMLAttributes<HTMLButtonElement> {
    color?: string;
}

const AppButton: FC<AppButtonProps> = ({ color, ...otherProps }) => <button type="button" {...otherProps} />;

export { AppButton };
export default AppButton;
