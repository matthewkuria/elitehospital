import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import "./globals.css";




export const metadata: Metadata = {
  title: "Elite Complete Care LLC - Home",
  description: "Elite Complete Care LLC provides top-notch home care services tailored to your needs. Our dedicated team ensures compassionate and professional care for you and your loved ones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">      
      <body
        className={``}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
