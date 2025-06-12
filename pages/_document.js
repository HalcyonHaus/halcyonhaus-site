import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
  <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
  <link rel="apple-touch-icon" href="/favicon-180x180.png" sizes="180x180" />
</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
