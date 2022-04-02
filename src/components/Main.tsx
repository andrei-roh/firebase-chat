import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Context } from 'index';
import Error from './Error/Error';
import Navbar from './Navbar/Navbar';
import Router from './Router/Router';
import Spinner from './Spinner/Spinner';

import { IMain } from 'types';

const Main: React.FC<IMain> = () => {
  const { authentication } = useContext(Context);
  const [user, loading, error] = useAuthState(authentication);

  if (error) return <Error error={error} />;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Router authentication={authentication} user={user} />
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default Main;
