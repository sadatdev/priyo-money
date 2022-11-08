import LadingPage from 'features/landing-page';
import Head from 'next/head';
import React from 'react';

const IndexPage = () => {
    return (
        <>
            <Head>
                <title>Priyo Money</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <LadingPage />
        </>
    );
};

export default IndexPage;
