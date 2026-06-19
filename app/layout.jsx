import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Amri – Digital Marketing & Web Development Services',
  icons: {
    icon: 'https://res.cloudinary.com/dnr4zo1ov/image/upload/v1776558591/logo_kv0csr.png',
    shortcut:
      'https://res.cloudinary.com/dnr4zo1ov/image/upload/v1776558591/logo_kv0csr.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      </body>
    </html>
  );
}
