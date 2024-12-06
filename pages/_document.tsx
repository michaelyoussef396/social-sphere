import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Social Sphere - Crafting unforgettable events tailored to your vision." />
        <meta name="author" content="Social Sphere" />
        <meta name="keywords" content="events, planning, social sphere, weddings, parties" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Gilda+Display:regular|Cormorant:regular|Cormorant:300|Monsieur+La+Doulaise:regular"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased bg-background1 text-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
