import { useContext, useState } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@material-ui/core';

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
            width: '80%',
            height: '60vh',
            border: 'solid 1px gray',
            overflowY: 'auto',
          }}
        >
          {messages?.map((message) => (
            <div
              key={`${message.displayName}-${message.createdAt}`}
              style={{
                margin: 15,
                marginLeft: user?.uid === message.uid ? 'auto' : 10,
                padding: 5,
              }}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={'column'}
          alignItems={'flex-end'}
          style={{ width: '80%' }}
        >
          <TextField
            fullWidth
            maxRows={2}
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />
          <Button onClick={sendMessage}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
