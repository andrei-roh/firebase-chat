import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';

import { privateRoutes, publicRoutes } from 'components/routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from 'components/utils/types';
import { Context } from 'index';
import { IRouter } from 'types';

const Router: React.FC<IRouter> = () => {
  const { authentication } = useContext(Context);
  const [user] = useAuthState(authentication);

  return (
    <>
      {user ? (
        <>
          <Routes>
            {privateRoutes.map(({ path, Component }) => (
              <Route key={Component} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate replace to={CHAT_ROUTE} />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            {publicRoutes.map(({ path, Component }) => (
              <Route key={Component} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default Router;
