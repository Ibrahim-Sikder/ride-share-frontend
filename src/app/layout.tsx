import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Book your next adventure with Apollo Gears.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      //  className="dark text-foreground bg-background"
    >
      <body>
        <Providers>
          <div className="mx-auto container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
