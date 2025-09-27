import { Poppins, Roboto } from "next/font/google";
import "./global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  display: "swap",
});


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Kwiq 24",
  description: "It is a versatile IT service provider website.",
  icons: {
    icon: "/icons/Favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

        className={`${poppins.variable} ${roboto.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <div id="root">
          {/* ✅ Navbar on all pages */}
          <Navbar />

          {/* ✅ Page content */}
          <main>{children}</main>

          {/* ✅ Footer on all pages */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
