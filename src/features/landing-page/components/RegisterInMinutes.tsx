import { Layout } from 'components';
import features from '../constants/features';
import React from 'react';
import tw from 'twin.macro';
import FeaturesCard from './FeaturesCard';
import strings from '../constants/strings';

const RegisterInMinutes = () => {
    return (
        <Layout bgColor="white">
            <Container>
                <FeatureTitle>{strings.register_in_mins}</FeatureTitle>
                <FeaturesContainer>
                    {features.map((feature) => (
                        <FeaturesCard key={feature.id} feature={feature} />
                    ))}
                </FeaturesContainer>
            </Container>
        </Layout>
    );
};

const Container = tw.div`py-12 md:py-24 lg:py-32`;

const FeaturesContainer = tw.div`grid gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-4`;

const FeatureTitle = tw.h3`font-semibold text-center text-black  text-2xl md:text-2xl mb-5 md:mb-12`;

export default RegisterInMinutes;
