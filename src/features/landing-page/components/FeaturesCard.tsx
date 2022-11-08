import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import { IFeature } from 'types/IFeature';

interface IFeaturesCardProps {
    feature: IFeature;
}

const FeaturesCard = ({ feature }: IFeaturesCardProps) => {
    return (
        <FeatureCard>
            <FeatureImage>
                <Image
                    src={`/images/${feature.icon}`}
                    alt={feature.title}
                    height={200}
                    width={200}
                />
            </FeatureImage>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureSubtitle>{feature.subtitle}</FeatureSubtitle>
        </FeatureCard>
    );
};

export default FeaturesCard;

const FeatureCard = tw.div`flex flex-col justify-center items-center text-center`;
const FeatureImage = tw.div`h-32 w-32`;
const FeatureTitle = tw.h4`font-semibold text-lg md:text-xl mt-2.5`;
const FeatureSubtitle = tw.p`text-sm mt-1 px-5`;
