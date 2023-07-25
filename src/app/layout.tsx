import Footer from "@component/components/footer";
import Navbar from "@component/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Amy Hirschi Coaching",
  description: "Certified life coach for adoptive families",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
