import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/Navbar/DashboardNavbar';
import DashboardSidebar from '../components/Navbar/sidebar';

const DashboardLayout = () => {
    
    return (
        <>
            <div className='flex'>
                <DashboardSidebar/>
                <div className='w-full'>
                    <DashboardNavbar/>
                    <Outlet/>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
};

export default DashboardLayout;