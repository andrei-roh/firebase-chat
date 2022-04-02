import { useContext } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';

import firebase from 'firebase/compat/app';

import { Context } from 'index';

const Login: any = () => {
  const { authentication } = useContext(Context);
  const getLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await authentication?.signInWithPopup(provider);
    return user;
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 64 }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid
          container
          style={{ width: 400, background: '#f50057' }}
          alignItems={'center'}
          direction={'column'}
        >
          <Box p={5}>
            <Button onClick={getLogin}>Enter with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
