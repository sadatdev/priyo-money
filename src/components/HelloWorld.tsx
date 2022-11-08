import React from 'react';
import tw from 'twin.macro';

const HelloWorld = () => {
    return (
        <StyledContainer>
            <Title> HelloWorld</Title>
        </StyledContainer>
    );
};

export default HelloWorld;

const StyledContainer = tw.div`bg-primary`;

const Title = tw.h2`text-xl text-center py-5 font-bold text-dark`;
