
import { Header } from "@/app/layout/header"; // Assuming header is in this path
import { Footer } from "@/app/layout/footer"; // Assuming you have a footer

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