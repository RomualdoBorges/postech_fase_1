import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppBar from "./components/AppBar";
import "@/styles/reset.css";
import "@/styles/global.css";
import { VisibilityProvider } from "@/context/VisibilityContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ByteBank",
  description:
    "O ByteBank é um sistema bancário simples desenvolvido para simular operações financeiras essenciais de uma conta digital. Ele permite realizar visualizar saldo da conta corrente e informações sobre transações (extrato, e novas transações).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable}  antialiased`}>
        <AppBar />
        <VisibilityProvider>
          <main>{children}</main>
        </VisibilityProvider>
        <footer></footer>
      </body>
    </html>
  );
}
