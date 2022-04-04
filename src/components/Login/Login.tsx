import { useContext } from 'react';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MouseIcon from '@material-ui/icons/Mouse';

import { Context } from 'index';
import { getLogin } from 'components/utils/getLogin';
import { Authorization } from 'style';

const Login: any = () => {
  const { authentication } = useContext(Context);

  return (
    <Container>
      <Authorization container direction="column">
        <IconButton onClick={() => getLogin(authentication)}>
          <MouseIcon color="secondary" fontSize="large" />
        </IconButton>
        START CHAT
      </Authorization>
    </Container>
  );
};

export default Login;
