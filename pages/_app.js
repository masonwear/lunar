
import App, { Container } from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import { Helmet } from "react-helmet"



export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (



      <>


        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://masonwear.co',
            site_name: 'Lunar',
            title: 'Lunarr',
            images: [
              {
                url: 'https://masonwear.co/static/og-image.png',
                alt: 'Mason Wear',
              },

            ],
          }}
          twitter={{
            handle: '@masondwear',
            site: '@masondwear',
            cardType: 'summary_large_image',
          }}
        />

        <Component {...pageProps} />

        <Helmet>
          <title>Lunar</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />


        </Helmet>


      </>



    );
  }
}