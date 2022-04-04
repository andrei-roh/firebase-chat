import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

export const Central = styled(Box)(`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`);

export const Authorization = styled(Grid)(() => ({
  height: `calc(100vh - 64px)`,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Chatter = styled(Grid)(() => ({
  height: `calc(100vh - 64px)`,
  justifyContent: 'center',
  margin: '74px auto 0',
  maxWidth: 768,
}));

export const Bumf = styled(Card)(() => ({
  margin: 10,
  padding: 10,
  border: 'solid 1px #f50057',
}));

export const Companion = styled(Grid)(() => ({
  marginBottom: 10,
}));

export const Name = styled.div(() => ({
  fontSize: '0.8em',
  color: '#f50057',
}));

export const TextInput = styled(Grid)(() => ({
  alignItems: 'flex-end',
  width: '100%',
  margin: '0 10px',
  paddingBottom: '15px',
}));

export const TextInputField = styled(TextField)(() => ({
  marginTop: 10,
}));
