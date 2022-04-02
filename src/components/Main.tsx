import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Context } from 'index';
import Navbar from './Navbar/Navbar';
import Router from './Router/Router';

import { IMain } from 'types';
import Spinner from './Spinner/Spinner';

const Main: React.FC<IMain> = () => {
  const { authentication } = useContext(Context);
  const [user, loading, error] = useAuthState(authentication);

  if (error)
    return (
      <Box
        sx={{ display: 'flex', height: '100vh' }}
        justifyContent="center"
        alignItems="center"
      >
        {error}
      </Box>
    );

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
