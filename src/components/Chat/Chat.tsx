import { useContext, useState } from 'react';
import {
  Avatar,
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
        style={{ height: window.innerHeight - 64, marginTop: 15 }}
        justifyContent={'center'}
      >
        <div
          style={{
            width: '90%',
            height: '60vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {messages?.map((message) => (
            <div
              key={`${message.displayName}-${message.createdAt}`}
              style={{
                margin: 10,
                marginLeft: user?.uid === message.uid ? 'auto' : 0,
                padding: 5,
              }}
            >
              <Grid container direction="column">
                <Avatar src={message.photoURL} />
                <div style={{ fontSize: '0.6em' }}>{message.displayName}</div>
              </Grid>
              <div style={{ fontSize: '0.8em' }}>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={'column'}
          alignItems={'flex-end'}
          style={{ width: '90%' }}
        >
          <TextField
            fullWidth
            color="secondary"
            maxRows={2}
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
