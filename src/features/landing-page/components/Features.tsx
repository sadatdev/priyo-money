import { Layout } from 'components';
import features from '../constants/features';
import React from 'react';
import tw from 'twin.macro';
import FeaturesCard from './FeaturesCard';
import strings from '../constants/strings';

const Features = () => {
    return (
        <Layout>
            <Container>
                <FeatureTitle>{strings.features}</FeatureTitle>
                <FeaturesContainer>
                    {features.map((feature) => (
                        <FeaturesCard key={feature.id} feature={feature} />
                    ))}
                </FeaturesContainer>
            </Container>
        </Layout>
    );
};

export default Features;

const Container = tw.div`py-12 md:py-20`;

const FeaturesContainer = tw.div`grid gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-4`;

const FeatureTitle = tw.h3`font-semibold text-center text-black  text-2xl md:text-2xl mb-10 md:mb-20`;
