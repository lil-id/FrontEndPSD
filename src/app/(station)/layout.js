import "./globals.css";
import Script from 'next/script'

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" name="google" content="notranslate" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script src="https://code.jquery.com/jquery-3.5.1.js"></Script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <title>Public Smart Dispenser</title>
    </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}