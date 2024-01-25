import "./Layout.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="Layout__Container">
        <NavBar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
