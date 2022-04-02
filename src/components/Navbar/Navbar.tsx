import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Avatar, Button, Grid, Toolbar } from '@material-ui/core';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Context } from 'index';
import { LOGIN_ROUTE } from 'components/utils/types';
import { getLogin } from 'components/utils/getLogin';
import { INavbar } from 'types';

const Navbar: React.FC<INavbar> = () => {
  const { authentication } = useContext(Context);
  const [user] = useAuthState(authentication);
  const getExit = () => {
    authentication.signOut();
  };

  return (
    <AppBar color="secondary" position="fixed">
      <Toolbar>
        <Grid container justifyContent={'flex-end'}>
          {user ? (
            <>
              <Avatar src={user?.photoURL!} alt={user?.displayName!} />
              <Button onClick={getExit}>Exit</Button>
            </>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button onClick={() => getLogin(authentication)}>Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
