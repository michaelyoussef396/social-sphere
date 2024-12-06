import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Gilda+Display:regular|Cormorant:regular|Cormorant:300|Monsieur+La+Doulaise:regular"
          rel="stylesheet"
        />
        
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
