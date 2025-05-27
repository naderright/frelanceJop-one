import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



export const metadata = {
  title: "Alis Construction Group",
  description: "We specialize in contract and permanent staffing and recruitment for engineering and engineering support roles",
  icons: './favicon.ico'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
        <link rel="icon" href={metadata.icons} />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Google Tag (Analytics + Ads) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GM3NRWFECE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GM3NRWFECE'); // Google Analytics
              gtag('config', 'AW-17029939800'); // Google Ads
            `
          }}
        />
      </head>
      <body className={` antialiased`}>
        <Header />
            <main className="flex-grow">
              {children}
            </main>
        <Footer />
      </body>
    </html>
  );
}
