import React from 'react';
import tw, { styled } from 'twin.macro';

interface ILayoutProps {
    children: React.ReactNode;
    bgColor?: string;
}

const Layout = ({ children, bgColor }: ILayoutProps) => {
    return (
        <LayoutContainer bgColor={bgColor}>
            <ContentContainer>{children}</ContentContainer>
        </LayoutContainer>
    );
};

export default Layout;

interface LayoutContainerProps {
    bgColor?: string;
}

const LayoutContainer = styled.div(({ bgColor }: LayoutContainerProps) => [
    tw`bg-primary`,
    bgColor && `background-color: ${bgColor}`,
]);

const ContentContainer = tw.main`max-w-7xl mx-auto p-4 xl:p-5`;
