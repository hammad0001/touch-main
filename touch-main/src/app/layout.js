import localFont from "next/font/local";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import FooterU from "./components/Footer/footerU";
import { MetadataProvider } from "./components/MetaDataContext";
import Metadata from "./components/Metadata";
import Navbar from "./components/Navbar/Navbar1";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: " Trusted Auto Detailing Services in Tracy, CA | Touch & Shine Auto Detail",
  description: " Looking for expert auto detailing near Tracy, CA? Touch & Shine Auto Detail delivers premium paint correction, ceramic coating, and mobile detailing with care and precision.",
  verification: {
    google: "CdZ_IxgmhATd8HZmACAvCcX14xnexgUEb-R-9OcAUww",
  },
};
// google search console code added 
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
{/* Google Tag Manager */}
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M9Q2NNKJ');
    `,
  }}
/>
{/* End Google Tag Manager */}

        {/* You can also explicitly add it like this */}
        {/* <meta
          name="google-site-verification"
          content="xB_gZdp_X1KAfIzfUdw94d3i9SSObcpS4CFHgr_b2eo"
        /> */}

        <meta name="google-site-verification" content="CdZ_IxgmhATd8HZmACAvCcX14xnexgUEb-R-9OcAUww" />
      </head>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Touch and Shine Auto Detail",
            "url": "https://www.touchandshinedetail.com",
            "logo": "https://www.touchandshinedetail.com/images/logo.png",
            "image": "https://www.touchandshinedetail.com/images/logo.png",
            "description": "Professional auto detailing services specializing in exterior, interior detailing, ceramic coating, and paint correction.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1881 Newport Ct.",
              "addressLocality": "Tracy",
              "addressRegion": "CA",
              "postalCode": "95376",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.6837558,
              "longitude": -121.3754412
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-209-914-9052",
              "contactType": "Customer Service",
              "areaServed": "US",
              "availableLanguage": "English"
            },
            "priceRange": "$$",
            "sameAs": [
              "https://www.facebook.com/TouchAndShineAutoDetail",
              "https://twitter.com/TouchAndShineAutoDetail",
              "https://www.instagram.com/TouchAndShineAutoDetail"
            ],
            "founder": {
              "@type": "Person",
              "name": "Gabriel Hernandez",
              "jobTitle": "Owner and Lead Detailer",
              "description": "Strategic, multidisciplinary auto detailer with 20+ years of experience."
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Tracy, CA and surrounding areas"
            },
            "review": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Calvin Levy"
              },
              "datePublished": "2024-01-01",
              "reviewBody": "Highly recommend. Gabriel cleaned the entire interior and it looked spotless. I no longer cringe getting into my car. Thanks Gabriel!",
              "name": "5 Star Service"
            }
          })
        }} />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><MetadataProvider>
{/* Google Tag Manager (noscript) */}
<noscript
  dangerouslySetInnerHTML={{
    __html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9Q2NNKJ"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
  }}
/>
{/* End Google Tag Manager (noscript) */}

          <Navbar />
          <Metadata />
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <FooterU />
        </MetadataProvider>
      </body>
    </html>
  );
}
