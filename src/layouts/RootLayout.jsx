import Header from "../components/Header";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Created With Love</footer>
    </>
  );
}

export default RootLayout;
