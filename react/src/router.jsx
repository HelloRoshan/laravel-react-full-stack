import { createBrowserRouter } from 'react-router-dom';
import Signup from './views/Signup';
import Users from './views/Users';
import NotFound from './views/NotFound';
import Login from './views/Login';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/users",
        element: <Users />,
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;