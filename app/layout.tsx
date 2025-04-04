import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { connection } from "@/lib/mongodb";
import ReduxProvider from "@/providers/reduxProvider";
import Snackbar from "@/components/snackbar/snackbar";
import Navbar from "@/components/navbar/navbar";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connection();

  return (
    <html lang="en" data-theme="biddingsystem">

      <body
        className={`${manrope.className} antialiased min-h-screen w-full `} 
      >
        <ReduxProvider>  
           <Navbar/>
          <Snackbar />
          {children}
        </ReduxProvider>
    
      </body>
    </html>
  );
}
