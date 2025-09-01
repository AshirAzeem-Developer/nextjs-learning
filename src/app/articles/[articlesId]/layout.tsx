import Link from "next/link";

type Props = {
  children: React.ReactNode;
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang: "en" | "fr" | "gr" }>;
};

export default async function ArticlesLayout({
  children,
  params,
  searchParams,
}: Props) {
  const { articlesId } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <html lang="en">
      <body className={"flex flex-col items-start justify-center"}>
        {children}
        <h1 className=" text-4xl text-red-700">
          This is the layout for the Articles This is the Lang {lang}
          This is the Articles Id {articlesId}
        </h1>
      </body>
    </html>
  );
}
