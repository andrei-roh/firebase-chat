import Chat from './Chat/Chat';
import Login from './Login/Login';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/types';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
