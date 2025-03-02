import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Open_Sans({
  subsets: ['latin'], // يمكنك تغييرها إلى `latin-ext` أو أي خيار آخر من القائمة
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800"]
});



export const metadata = {
  title: "Aus Constraction Group",
  description: "We specialize in contract and permanent staffing and recruitment for engineering and engineering support roles",
  icons: './favicon.ico'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
