import { createBrowserRouter, Navigate } from 'react-router-dom';
import CreateChat from './page/CreateChat';
import { ROUTES_LIST } from './constants';

const router = createBrowserRouter([
  {
    path: ROUTES_LIST.root,
    element: <Navigate to={`/${ROUTES_LIST.createChat}`} />,
  },
  {
    path: `/${ROUTES_LIST.createChat}`,
    element: <CreateChat />,
  },
]);

export default router;
