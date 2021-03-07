import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import styled from 'styled-components';

import { IS_SIGN_IN_POPOVER_SHOWED, TOGGLE_SIGN_IN_POPOVER } from '~app/apollo';
import { IsSignInPopoverShowed } from '~app/apollo/local/types';
import { Button } from '~app/components/controls';

import { SignInForm } from './SignInForm';

const Box = styled.div``;

const Avatar = styled.img`
    border-radius: ${(props) => props.theme.radius.max};
    object-fit: cover;
`;

const AvatarBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: ${(props) => props.theme.radius.max};
    border: 2px solid ${(props) => props.theme.pallete.accent};

    &,
    ${Avatar} {
        width: 40px;
        height: 40px;
    }
`;

const FullName = styled.div`
    font-weight: 800;
    line-height: 1.2;
    font-size: 14px;
`;

const Email = styled.div`
    font-weight: 400;
    font-size: 14px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5em;

    & > * {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 196px;
    }
`;

const User = styled.div`
    display: flex;
    align-items: center;
`;

const Auth = styled.div`
    position: relative;
`;

const UserProfile: FC = () => {
    const { data: popoverData } = useQuery<IsSignInPopoverShowed>(IS_SIGN_IN_POPOVER_SHOWED);

    const handleToggleSignInPopover = (status?: boolean) =>
        TOGGLE_SIGN_IN_POPOVER(status ?? !popoverData?.isSignInPopoverShowed);

    return (
        <Box>
            {/* <User href={PROFILE_ROUTE}>
                <AvatarBox>
                    <Avatar src="https://images.unsplash.com/photo-1614432254115-7e756705e910" alt="User avatar" />
                </AvatarBox>
                <Info>
                    <FullName>Perov K</FullName>
                    <Email>Konstantin@google.com</Email>
                </Info>
            </User> */}

            <Auth>
                <Button
                    variant="default"
                    active={!!popoverData?.isSignInPopoverShowed}
                    onClick={() => handleToggleSignInPopover()}
                >
                    Sign In
                </Button>
                <Button variant="primary">Get started</Button>
                <SignInForm
                    showed={popoverData?.isSignInPopoverShowed}
                    onClose={() => handleToggleSignInPopover(false)}
                />
            </Auth>
        </Box>
    );
};

export { UserProfile };
export default UserProfile;
