import { Button, Layout } from 'components';
import Image from 'next/image';
import React from 'react';
import tw, { styled } from 'twin.macro';
import strings from '../constants/strings';

const Hero = () => {
    return (
        <Layout bgColor="#0AA99E" noPadding>
            <Container>
                <HeroCTA>
                    <Title1>{strings.heroTitle}</Title1>
                    <Title2>{strings.heroTitle2}</Title2>
                    <Subtitle>{strings.heroSubtitle}</Subtitle>
                    <Button label={strings.heroCTA} />
                </HeroCTA>
                <HeroImage>
                    <Image
                        height={5913 / 3}
                        width={4545 / 3}
                        src="/images/hero.png"
                        alt="Priyo Money"
                    />
                </HeroImage>
            </Container>
        </Layout>
    );
};

export default Hero;

const Container = styled.div`
    ${tw`flex flex-col py-24 md:flex-row justify-between items-center px-4 md:px-8`}
`;

const HeroCTA = styled.div`
    ${tw`flex flex-col items-center md:items-start `}
`;

const Title1 = styled.h1`
    ${tw`text-center md:text-left text-4xl md:text-6xl font-bold text-white whitespace-nowrap`}
`;
const Title2 = styled(Title1)`
    ${tw`text-dark`}
`;

const Subtitle = styled.h2`
    ${tw`text-center md:text-left text-sm md:text-lg font-semibold text-white md:w-3/5 my-2.5`}
`;

const HeroImage = styled.div``;
