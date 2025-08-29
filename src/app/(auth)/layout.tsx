export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <h1 className="bg-amber-200 text-6xl text-black">
          this is the Auth layout
        </h1>
      </body>
    </html>
  );
}
