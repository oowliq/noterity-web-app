import AppLink from 'app/components/AppLink';
import { PROFILE_ROUTE } from 'app/constants';
import React, { FC } from 'react';
import styled from 'styled-components';

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

const User = styled(AppLink)`
    display: flex;
    align-items: center;
`;

const Auth = styled.div``;

const UserProfile: FC = () => (
    <Box>
        <User href={PROFILE_ROUTE}>
            <AvatarBox>
                <Avatar src="https://images.unsplash.com/photo-1614432254115-7e756705e910" alt="User avatar" />
            </AvatarBox>
            <Info>
                <FullName>Perov K</FullName>
                <Email>Konstantin@google.com</Email>
            </Info>
        </User>
    </Box>
);

export { UserProfile };
export default UserProfile;
