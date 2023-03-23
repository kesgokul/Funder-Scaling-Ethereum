import Header from "@/components/Header";
import Providers from "./Providers";
import Shadow from "@/components/Shadow";
import "./globals.css";

export const metadata = {
  title: "Fund3r - fundrainsing DApp",
  description: "A multi-chain fundraising decentralised application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" relative isolate">
        <div className="absolute top-0 left-4 z-0">
          <Shadow w="400" h="400" />
        </div>
        <div className="hidden lg:block lg:absolute lg:bottom-0 lg:right-48 z-0">
          <Shadow w="400" h="400" />
        </div>
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
