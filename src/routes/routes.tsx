import {createBrowserRouter} from 'react-router-dom';
import Layout from '../layouts/layout';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import DashboardLayout from '../layouts/DashboardLayout';
import Users from '../pages/Users/Users';
import PrivateRoute from './protected';
// import PrivateRoute from './protected';

//we have to use .tsx where we use jsx
const routes = createBrowserRouter([
    {
        path:'/admin',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path:'/admin/users',
                element:<Users/>,
            }
        ]
    },
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/registration',
                element:<Registration/>,
            },
            {
                path:'*',
                element:<NotFound/>,
            }
        ]
    },
    
    
])

export default routes;