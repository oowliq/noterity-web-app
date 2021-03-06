import React, { ChangeEvent, FC, HTMLAttributes, useEffect, useState } from 'react';
import ClickOutHandler from 'react-onclickout';
import Box from 'app/components/Box';
import styled from 'styled-components';
import Field from 'app/components/Field';
import FormGroup from 'app/components/FormGroup';
import AppButton from 'app/components/AppButton';
import FormLabel from 'app/components/FormLabel';

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
                <FormGroup>
                    <FormLabel htmlFor="sign-in-form-email">Email</FormLabel>
                    <Field id="sign-in-form-email" type="text" value={emailValue} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="sign-in-form-password">Password</FormLabel>
                    <Field id="sign-in-form-password" type="password" />
                </FormGroup>
                <FormGroup>
                    <AppButton variant="primary" disabled={disabled}>
                        Continue
                    </AppButton>
                </FormGroup>
            </Wrapper>
        </ClickOutHandler>
    ) : null;
};

export { SignInForm };
export default SignInForm;
