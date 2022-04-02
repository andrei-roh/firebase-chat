import { useContext } from 'react';
import { Container, Grid, IconButton } from '@material-ui/core';
import MouseIcon from '@material-ui/icons/Mouse';

import { Context } from 'index';
import { getLogin } from 'components/utils/getLogin';

const Login: any = () => {
  const { authentication } = useContext(Context);

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 64 }}
        alignItems={'center'}
        justifyContent={'center'}
        direction="column"
      >
        <IconButton onClick={() => getLogin(authentication)}>
          <MouseIcon color="secondary" fontSize="large" />
        </IconButton>
        START CHAT
      </Grid>
    </Container>
  );
};

export default Login;
