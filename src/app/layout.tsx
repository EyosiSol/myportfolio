import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/header";
import Footer from "./components/footer";
import GetIntouch from "./components/getIntouch";

export const metadata: Metadata = {
  title: "Eyosias Solomon",
  description: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased  dark:bg-[#1A1A1A] dark:text-white flex flex-col gap-10 items-center justify-center`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <GetIntouch />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
