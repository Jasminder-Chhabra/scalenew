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
      <Script src="/js/classes.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
