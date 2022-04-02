import { useContext, useState } from 'react';
import {
  Avatar,
  Card,
  Container,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Context } from 'index';
import Spinner from 'components/Spinner/Spinner';
import 'index.css';

const Chat: any = () => {
  const { authentication, firestore } = useContext(Context);
  const [user] = useAuthState(authentication);
  const [text, setText] = useState('');

  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText('');
  };

  if (loading) return <Spinner />;

  return (
    <Container>
      <Grid
        container
        style={{
          height: window.innerHeight - 64,
          margin: '74px auto 0',
          maxWidth: 768,
        }}
        justifyContent={'center'}
      >
        <div>
          {messages?.map((message) => (
            <Card
              key={`${message.displayName}-${message.createdAt}`}
              style={{ margin: 10, padding: 10 }}
            >
              <Grid container direction="column" style={{ marginBottom: 10 }}>
                <Avatar src={message.photoURL} alt={message.displayName} />
                <div style={{ fontSize: '0.8em', color: '#f50057' }}>
                  {message.displayName}
                </div>
              </Grid>
              <div>{message.text}</div>
            </Card>
          ))}
        </div>
        <Grid
          container
          direction={'column'}
          alignItems={'flex-end'}
          style={{ width: '100%', margin: '0 10px', paddingBottom: '15px' }}
        >
          <TextField
            fullWidth
            color="secondary"
            maxRows={2}
            style={{ marginTop: 10 }}
            value={text}
            onChange={(element: any) => setText(element.target.value)}
          />
          <IconButton color="secondary" onClick={sendMessage}>
            <MailIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
