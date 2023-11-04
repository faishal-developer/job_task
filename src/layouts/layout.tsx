import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LoginNavbar from '../components/Navbar/Navbar';
import { useEffect } from 'react';

const Layout = () => {
    const location=useLocation()
    const navigate=useNavigate()

    useEffect(()=>{
        // redirecting to login page
        if(location.pathname==='/'){
            navigate('/login')
        }
    },[])
    return (
        <>
            <LoginNavbar/>
            <Outlet/>
            {/* <Footer/> */}
        </>
    );
};

export default Layout;