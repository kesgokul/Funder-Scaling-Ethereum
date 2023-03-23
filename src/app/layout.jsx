import Header from "@/components/Header";
import Providers from "./Providers";
import "./globals.css";

export const metadata = {
  title: "Fund3r - fundrainsing DApp",
  description: "A multi-chain fundraising decentralised application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-waves bg-cover bg-opacity-30 bg-green-900 bg-blend-darken relative isolate">
        <Providers>
          <>
            <Header />

            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
