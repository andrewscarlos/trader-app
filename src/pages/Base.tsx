import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Menu/Sidebar";

export function Base({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="content">
        {children}
        <Footer />
      </main>
    </>
  );
}
