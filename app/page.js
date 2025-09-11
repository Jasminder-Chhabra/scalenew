
import Head from "next/head";

import Header from "@/components/Header";
import LandingPage from "@/components/home1/LandingPage";

export default function Home() {
  




  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Scale Us Technologies - Website and Mobile App Development Company
        </title>
        <meta
          name="description"
          content="Scale Us Technologies offers top-notch website and mobile app development services, crafting intuitive and high-performance digital solutions to enhance user experiences and drive business growth."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.scaleus.in",
            logo: "https://www.scaleus.in/img/favicon.svg",
          })}
        </script>
        <meta
          property="og:title"
          content="Scale Us Technologies - Website and Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="Scale Us Technologies offers top-notch website and mobile app development services, crafting intuitive and high-performance digital solutions to enhance user experiences and drive business growth."
        />
        <meta
          property="og:image"
          content="https://www.scaleus.in/img/favicon.svg"
        />
        <meta property="og:image:alt" content="Scale Us Technologies Logo" />
        <meta property="og:url" content="https://www.scaleus.in" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.svg" sizes="32x32" />
        {/* Inline styles moved from previous CSS imports */}
        <style>{`
          :root {
            --stea-move: var(--stg-gap);
            --stea-zoom-in: 0.9;
            --stea-zoom-out: 1.1;
            --stea-duration: 0.5s;
          }
          [data-split-appear] { --stea-move: 0.5cap; }
          [data-appear] {
            opacity: 0;
            transition: opacity var(--stea-duration), transform var(--stea-duration);
            will-change: opacity, transform;
          }
          [data-appear="fade-down"] { transform: translateY(calc(-1 * var(--stea-move))); }
          [data-appear="fade-up"] { transform: translateY(var(--stea-move)); }
          [data-appear="fade-left"] { transform: translateX(var(--stea-move)); }
          [data-appear="fade-right"] { transform: translateX(calc(-1 * var(--stea-move))); }
          [data-appear="zoom-out"] { transform: scale(var(--stea-zoom-out)); }
          [data-appear].in-view {
            opacity: 1;
            transform: scale(1) translate(0, 0);
          }
          [data-unload].is-unloading {
            opacity: 0;
            transition: opacity var(--stea-duration) ease-in-out, transform var(--stea-duration) ease-in-out;
            will-change: opacity, transform;
          }
          [data-unload="fade-up"].is-unloading { transform: translateY(calc(-1 * var(--stea-move))); }
          [data-unload="fade-down"].is-unloading { transform: translateY(var(--stea-move)); }
          [data-unload="fade-left"].is-unloading { transform: translateX(calc(-1 * var(--stea-move))); }
          [data-unload="fade-right"].is-unloading { transform: translateX(var(--stea-move)); }
          [data-unload="zoom-out"].is-unloading { transform: scale(var(--stea-zoom-out)); }
          body.is-unloading [data-unload] { pointer-events: none; }
          .bringer-backlight {
            position: fixed;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transform: translate(-50%, -50%);
            left: var(--mouse-x);
            top: var(--mouse-y);
          }
          .stg-container { overflow: visible !important; }
          .bringer-rcp-wrap { display: none; }
          body.rcp-show .bringer-rcp-wrap {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10001;
          }
          .bringer-rcp-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
          }
          .bringer-rcp-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 24px;
            text-align: center;
          }
          .bringer-footer-line {
            width: 100vw;
            background: var(--bringer-s-container-bg);
            padding: var(--stg-gap) 0;
            position: relative;
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            z-index: 22;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .bringer-footer-line:before {
            content: "";
            width: 100%;
            height: 1px;
            display: block;
            background: var(--bringer-c-border-gradient);
            position: absolute;
            top: 0;
            left: 0;
          }
          .bringer-socials-list a {
            pointer-events: auto !important;
            z-index: 999;
          }
        `}</style>
      </Head>

      <Header />
<LandingPage/>
    </>
  );
}
