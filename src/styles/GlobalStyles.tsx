import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
    body: {
        WebkitTapHighlightColor: `transparent`,
        ...tw`antialiased`,
    },
});

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomStyles />
    </>
);

export default GlobalStyles;
