import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default RootLayout;
