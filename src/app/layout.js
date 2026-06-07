import "./globals.css";
import { siteContent } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: siteContent.brand.name,
  description: siteContent.brand.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
