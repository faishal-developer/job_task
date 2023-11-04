import { Outlet } from 'react-router-dom';
import LoginNavbar from '../components/Navbar/Navbar';

const Layout = () => {
    
    return (
        <>
            <LoginNavbar/>
            <Outlet/>
            {/* <Footer/> */}
        </>
    );
};

export default Layout;