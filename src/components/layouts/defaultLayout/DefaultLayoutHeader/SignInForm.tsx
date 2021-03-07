import { Box } from 'app/components/containers';
import { Button } from 'app/components/controls';
import { Field, Group,Label } from 'app/components/forms';
import React, { ChangeEvent, FC, HTMLAttributes, useEffect, useState } from 'react';
import ClickOutHandler from 'react-onclickout';
import styled from 'styled-components';

interface SignInFormProps extends HTMLAttributes<HTMLDivElement> {
    showed?: boolean;
    onClose?: () => void;
}

const Wrapper = styled(Box)`
    position: absolute;
    top: calc(100% + 1.5em);
    right: 0;
    min-width: 350px;
`;

const SignInForm: FC<SignInFormProps> = ({ showed, onClose, ...otherProps }) => {
    const [emailValue, setEmailValue] = useState<string>('');

    const [disabled, setDisabled] = useState<boolean>(true);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => setEmailValue(e.target.value);

    useEffect(() => {
        setDisabled(!emailValue.length);
    }, [emailValue]);

    return showed ? (
        <ClickOutHandler
            onClickOut={() => {
                if (onClose) onClose();
            }}
        >
            <Wrapper {...otherProps}>
                <Group>
                    <Label htmlFor="sign-in-form-email">Email</Label>
                    <Field id="sign-in-form-email" type="text" value={emailValue} onChange={handleInputChange} />
                </Group>
                <Group>
                    <Label htmlFor="sign-in-form-password">Password</Label>
                    <Field id="sign-in-form-password" type="password" />
                </Group>
                <Group>
                    <Button variant="primary" disabled={disabled}>
                        Continue
                    </Button>
                </Group>
            </Wrapper>
        </ClickOutHandler>
    ) : null;
};

export { SignInForm };
export default SignInForm;
