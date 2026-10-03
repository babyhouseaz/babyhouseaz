import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BabyHouse Uşaq Bağçası – Kiçik addımlar, böyük gələcək!",
  description:
    "Sevgi dolu mühitdə xoşbəxt uşaqlar böyüdürük. BabyHouse olaraq məqsədimiz övladlarınızın həm sevgi, qayğı və diqqətlə əhatə olunduğu bir mühitdə böyüməsini təmin etməkdir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${nunito.className} antialiased bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
