import { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';

import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Context } from 'index';
import Spinner from 'components/Spinner/Spinner';
import {
  Bumf,
  Chatter,
  Companion,
  Name,
  TextInput,
  TextInputField,
} from 'style';

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
      <Chatter container>
        <div>
          {messages?.map((message) => (
            <Bumf key={`${message.displayName}-${message.createdAt}`}>
              <Companion container direction="column">
                <Avatar src={message.photoURL} alt={message.displayName} />
                <Name>{message.displayName}</Name>
              </Companion>
              <div>{message.text}</div>
            </Bumf>
          ))}
        </div>
        <TextInput container direction={'column'}>
          <TextInputField
            fullWidth
            color="secondary"
            maxRows={2}
            value={text}
            onChange={(element: any) => setText(element.target.value)}
          />
          <IconButton color="secondary" onClick={sendMessage}>
            <MailIcon />
          </IconButton>
        </TextInput>
      </Chatter>
    </Container>
  );
};

export default Chat;
