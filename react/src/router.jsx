import { Navigate, createBrowserRouter } from 'react-router-dom';
import Signup from './views/Signup';
import Users from './views/Users';
import NotFound from './views/NotFound';
import Login from './views/Login';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/',
                element: <Navigate to="/users" />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            }
        ]
    },
    
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;