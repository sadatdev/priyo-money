import { Layout } from 'components';
import Image from 'next/image';
import React from 'react';
import tw, { styled } from 'twin.macro';
import strings from '../constants/strings';

const PriyoVisa = () => {
    return (
        <Layout bgColor="#000000">
            <Container>
                <CardTexts>
                    <Title>{strings.cardTitle}</Title>
                    <Subtitle>{strings.cardSubtitle}</Subtitle>
                </CardTexts>
                <CardImage>
                    <Image height={484} width={389} src="/images/card.png" alt="Priyo Money" />
                </CardImage>
            </Container>
        </Layout>
    );
};

export default PriyoVisa;

const Title = styled.h1`
    ${tw`text-center md:text-left text-4xl md:text-6xl font-bold text-white whitespace-nowrap`}
`;

const CardTexts = styled.div`
    ${tw`flex flex-col items-center md:items-start order-last md:order-first mt-8 md:mt-0`}
`;

const Subtitle = styled.h2`
    ${tw`text-center md:text-left text-sm md:text-base font-semibold text-white md:w-4/5 my-2.5`}
`;

const Container = styled.div`
    ${tw`flex flex-col py-20 md:py-24 md:flex-row justify-between items-center px-3`}
`;

const CardImage = styled.div``;
