/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project imports
import MinimalLayout from 'layout/MinimalLayout';
import Loadable from 'ui-component/Loadable';

// not found routing
const NotFound = Loadable(lazy(() => import('views/pages/notFound')));

// ==============================|| MAIN ROUTING ||============================== //

const NotFoundRoute = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '*',
            element: <NotFound />,
        },
    ],
};

export default NotFoundRoute;
