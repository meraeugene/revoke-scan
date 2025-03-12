import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"], // You can specify different weights
  subsets: ["latin"],
  variable: "--font-roboto", // This allows using it in CSS
});

export const metadata: Metadata = {
  title: "Token Approvals | RevokeScan",
  description:
    "BscScan allows you to explore and search the Binance blockchain for transactions, addresses, tokens, prices and other activities taking place on Revoke Smart Chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://beaconscan.com/favicon.ico"
          sizes="any"
        />

        <title>Token Approvals | RevokeScan</title>
        <meta name="title" content="Token Approvals | RevokeScan" />
        <meta
          name="description"
          content="BscScan allows you to explore and search the Binance blockchain for transactions, addresses, tokens, prices and other activities taking place on Revoke Smart Chain"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.revokescan.org/tokenapprovalchecker"
        />
        <meta property="og:title" content="Token Approvals | RevokeScan" />
        <meta
          property="og:description"
          content="BscScan allows you to explore and search the Binance blockchain for transactions, addresses, tokens, prices and other activities taking place on Revoke Smart Chain"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.revokescan.org/tokenapprovalchecker"
        />
        <meta property="twitter:title" content="Token Approvals | RevokeScan" />
        <meta
          property="twitter:description"
          content="BscScan allows you to explore and search the Binance blockchain for transactions, addresses, tokens, prices and other activities taking place on Revoke Smart Chain"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
