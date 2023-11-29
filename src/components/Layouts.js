
import Navbar from "./Ui/Navbar";
import Footer from "./Ui/Footer";

const Layouts = ({ children }) => {
  return (
    <div style={{minHeight:'100vh',}} >
      <Navbar></Navbar>
      <main> {children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
