import "./globals.css";
// import ClientWrapper from "./ClientWrapper";
import GlobalEffects from "@/components/GlobalEffect";
import '../public/css/config.css';
import '../public/css/libs.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import Script from "next/script";
export const metadata = {
  title: "Scale Us",
  description: "Next.js app",
  icons: {
    icon: "/favicon.svg",   // Favicon in public/
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <GlobalEffects/>
        {children}
         <Script src="/js/lib/libs.js" strategy="afterInteractive" />
      <Script src="/js/contact_form.js" strategy="afterInteractive" />
      <Script src="/js/st-core.js" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PPS5N5K987');
      `}</Script>
       <Script id="vercel-analytics" strategy="afterInteractive">{`
        window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
      `}</Script>
      <Script src="/js/classes.js" strategy="afterInteractive" />
       <Script id="vercel-speed-insights" strategy="afterInteractive">{`
        window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
      `}</Script>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PPS5N5K987" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
