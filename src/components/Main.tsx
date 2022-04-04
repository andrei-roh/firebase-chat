import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Context } from 'index';
import Navbar from './Navbar/Navbar';
import Router from './Router/Router';

import { IMain } from 'types';
import Spinner from './Spinner/Spinner';
import { Central } from 'style';

const Main: React.FC<IMain> = () => {
  const { authentication } = useContext(Context);
  const [user, loading, error] = useAuthState(authentication);

  if (error) return <Central>{error}</Central>;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {loading ? (
          <Spinner />
        ) : (
          <Router authentication={authentication} user={user} />
        )}
      </BrowserRouter>
    </>
  );
};

export default Main;
