import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Menu/Sidebar";
import { Toast } from "../components/Toast";

export function Base({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="content">
        {children}
        <Footer />
      </main>
      <Toast />
    </>
  );
}
