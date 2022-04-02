import React, { useContext } from 'react';
import { AppBar, Avatar, Button, Grid, Toolbar } from '@material-ui/core';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Context } from 'index';
import { getLogin } from 'components/utils/getLogin';
import { INavbar } from 'types';

const Navbar: React.FC<INavbar> = () => {
  const { authentication } = useContext(Context);
  const [user] = useAuthState(authentication);
  const getExit = () => {
    authentication.signOut();
  };

  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Grid container justifyContent={'flex-end'}>
          {user ? (
            <>
              <Avatar src={user?.photoURL!} />
              <Button onClick={getExit}>Exit</Button>
            </>
          ) : (
            <Button onClick={() => getLogin(authentication)}>Login</Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
