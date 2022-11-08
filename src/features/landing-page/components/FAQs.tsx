import { Layout } from 'components';
import React from 'react';
import tw from 'twin.macro';
import faqs from '../constants/faqs';
import strings from '../constants/strings';
import { Accordion } from './Accordion';

const FAQs = () => {
    return (
        <Layout bgColor="#FAFAFA">
            <Container>
                <Subtitle>{strings.faq}</Subtitle>
                <Title>{strings.lets_ans}</Title>
                <ContentContainer>
                    {faqs.map((faq) => (
                        <Accordion key={faq.id} title={faq.title} content={faq.subtitle} />
                    ))}
                </ContentContainer>
            </Container>
        </Layout>
    );
};

export default FAQs;

const Container = tw.div`py-12 md:py-20`;

const Subtitle = tw.p`text-center text-sm text-gray font-semibold`;
const Title = tw.h3`font-semibold text-center text-black  text-2xl md:text-2xl mb-10 md:mb-16`;

const ContentContainer = tw.div`border border-border/30 rounded-sm shadow-md`;
