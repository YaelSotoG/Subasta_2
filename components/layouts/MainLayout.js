import Navbar from "../Navbar";
import Footer from "../Footer";


const MainLayout = ({children}) => {
    return (
        <>
          <Navbar />
          <div className="my-0">{children}</div>
          {/* <Footer /> */}
        </>
    )
}

export default MainLayout;