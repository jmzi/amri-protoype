import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Amri – Digital Marketing & Web Development Services',
  icons: {
    icon: 'https://res.cloudinary.com/dnr4zo1ov/image/upload/w_32,h_32,c_fit/v1776558591/logo_kv0csr.png',
    shortcut: 'https://res.cloudinary.com/dnr4zo1ov/image/upload/w_32,h_32,c_fit/v1776558591/logo_kv0csr.png',
    apple: 'https://res.cloudinary.com/dnr4zo1ov/image/upload/w_180,h_180,c_fit/v1776558591/logo_kv0csr.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D9J7GMPNJZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D9J7GMPNJZ');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x9j1u8k16u");
          `}
        </Script>
      </body>
    </html>
  );
}
