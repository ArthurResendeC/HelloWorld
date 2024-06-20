import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@radix-ui/react-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exercício 2",
  description: "E-commerce Onebitcode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
