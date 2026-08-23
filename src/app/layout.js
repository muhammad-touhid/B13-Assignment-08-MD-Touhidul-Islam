import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ToastContainer } from "react-toastify";

const outfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "BorrowBook",
  description: "A modern online book borrowing platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${outfitFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
