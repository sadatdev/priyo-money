import { Layout } from 'components';
import React from 'react';
import tw, { styled } from 'twin.macro';
import strings from '../constants/strings';

const Header = () => {
    return (
        <Layout>
            <Container>
                <Title>
                    {strings.headerTitle}
                    <Version>{strings.version}</Version>
                </Title>
                <ContentRight>
                    <button>{strings.register}</button>
                    <button>{strings.login}</button>
                </ContentRight>
            </Container>
        </Layout>
    );
};

export default Header;

const Container = tw.div`
flex justify-between items-center px-2.5
`;

const Title = tw.h3`
font-semibold text-lg md:text-xl relative
`;
const Version = tw.span`
font-normal text-xs absolute pl-1`;

const ContentRight = styled.div`
    ${tw`flex justify-between items-center space-x-2.5`}
    button {
        ${tw`font-medium hover:text-dark/80 active:text-dark/50 text-sm md:text-base`}
    }
`;
