import { FacebookIcon, InstagramIcon, TwitterIcon } from 'assets';
import { Layout } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';
import footerLinks from '../constants/footerLinks';

const getIconsByName = (name: string) => {
    switch (name) {
        case 'facebook': {
            return <FacebookIcon />;
        }
        case 'twitter': {
            return <TwitterIcon />;
        }
        case 'instagram': {
            return <InstagramIcon />;
        }
        default: {
            return <FacebookIcon />;
        }
    }
};

const Footer = () => {
    return (
        <Layout>
            <Container>
                <FooterItemsContainer>
                    {footerLinks.map((footerItem) => (
                        <div key={footerItem.id}>
                            <ItemTitle>{footerItem.title}</ItemTitle>
                            {footerItem.links ? (
                                footerItem.links?.map((link) => (
                                    <Link key={link.id} href={link.url} target="_blank">
                                        <ItemLink>{link.title}</ItemLink>
                                    </Link>
                                ))
                            ) : (
                                <IconsList>
                                    {footerItem.icons?.map((icon) => (
                                        <Link key={icon.id} href={icon.url} target="_blank">
                                            <ItemLink key={icon.id}>
                                                {getIconsByName(icon.icon)}
                                            </ItemLink>
                                        </Link>
                                    ))}
                                </IconsList>
                            )}
                        </div>
                    ))}
                </FooterItemsContainer>
                <LogoItemsContainer>
                    <Logo>
                        <Image alt="priyo" src="/images/priyo-logo.webp" height={31} width={98} />
                    </Logo>
                    <LinkList>
                        <Link href={'https://www.priyo.com'} target="_blank">
                            <ItemLink>Legal</ItemLink>
                        </Link>
                        <Link href={'https://www.priyo.com'} target="_blank">
                            <ItemLink>Country Site Map</ItemLink>
                        </Link>
                    </LinkList>
                    <LinkList>
                        <Link href={'https://www.priyo.com'} target="_blank">
                            <ItemLink>Privacy Policy</ItemLink>
                        </Link>
                    </LinkList>
                    <LinkList>
                        <Link href={'https://www.priyo.com'} target="_blank">
                            <ItemLink>Terms & Conditions</ItemLink>
                        </Link>
                    </LinkList>
                </LogoItemsContainer>
                <CopyrightText>Copyright © Priyo Inc 2022.</CopyrightText>
                <CopyrightText2>
                    Priyo money is sponsored by the FDIC insured Bank in the USA.
                </CopyrightText2>
            </Container>
        </Layout>
    );
};

export default Footer;

const Container = tw.div`py-12 md:py-20`;

const FooterItemsContainer = tw.div`grid grid-cols-1 pl-8 md:grid-cols-2 lg:grid-cols-4 gap-x-2.5 gap-y-10 md:gap-y-2.5`;

const ItemTitle = tw.h4`font-medium text-base pb-4`;
const ItemLink = tw.p`text-sm hover:underline py-0.5`;
const IconsList = tw.div`flex space-x-1 items-center`;

const LogoItemsContainer = tw(FooterItemsContainer)`mt-8 gap-2`;
const Logo = tw.div``;
const LinkList = tw.div`flex flex-col`;

const CopyrightText = tw.p`font-medium py-2 text-center mt-12`;
const CopyrightText2 = tw.p`font-medium text-center text-sm text-dark/90 px-3`;
