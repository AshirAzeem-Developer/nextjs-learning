import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Layout Meta Title ",
    template: " %s | NextJs-learning",
  },
  description: "This is the Layout metadata description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
