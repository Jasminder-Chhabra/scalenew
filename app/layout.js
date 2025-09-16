// app/layout.js or RootLayout.js

import "./globals.css";  
import "@/styles/config.css";     // Move CSS into styles folder
import "@/styles/libs.css";
import "@/styles/style.css";
import "@/styles/responsive.css";

import GlobalEffects from "@/components/GlobalEffect";
import Script from "next/script";

export const metadata = {
  title: "Scale Us",
  description: "Next.js app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <GlobalEffects />
        {children}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PPS5N5K987"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PPS5N5K987');
        `}</Script>

        <Script id="vercel-analytics" strategy="afterInteractive">{`
          window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
        `}</Script>
        <Script id="vercel-speed-insights" strategy="afterInteractive">{`
          window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
        `}</Script>

        <Script src="/js/lib/libs.js" strategy="lazyOnload" />
        <Script src="/js/contact_form.js" strategy="lazyOnload" />
        <Script src="/js/st-core.js" strategy="lazyOnload" />
        <Script src="/js/classes.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
