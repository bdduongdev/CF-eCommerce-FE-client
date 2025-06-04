import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from "./ScrollToTop";


const ClientLayout = () => {
  return (
    <>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
    </>
  );
};

export default ClientLayout;
