import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Explain IT Map",
  description: "Interactive 3D map of IT concepts with historical context and layered visualization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
