import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This will render the nested routes */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
