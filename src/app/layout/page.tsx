import type { Metadata } from "next";
import { Header } from "@/app/layout/header"; // Assuming header is in this path
import { Footer } from "@/app/layout/footer"; // Assuming you have a footer

export const metadata: Metadata = {
  title: "美甲技师记账本",
  description: "专业的美甲技师记账管理工具",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="p-4 pb-24">
        {children}
      </main>
      <Footer />
    </>
  );
}