import React from 'react';
import tw, { styled } from 'twin.macro';

interface ILayoutProps {
    children: React.ReactNode;
    bgColor?: string;
    noPadding?: boolean;
}

const Layout = ({ children, bgColor, noPadding }: ILayoutProps) => {
    return (
        <LayoutContainer bgColor={bgColor}>
            <ContentContainer noPadding={noPadding}>{children}</ContentContainer>
        </LayoutContainer>
    );
};

export default Layout;

interface LayoutContainerProps {
    bgColor?: string;
}

interface ContentContainerProps {
    noPadding?: boolean;
}

const LayoutContainer = styled.div(({ bgColor }: LayoutContainerProps) => [
    tw`bg-primary`,
    bgColor && `background-color: ${bgColor}`,
]);

const ContentContainer = styled.div(({ noPadding }: ContentContainerProps) => [
    tw`max-w-7xl mx-auto `,
    noPadding ? null : tw`p-4 md:p-6 xl:p-8`,
]);
