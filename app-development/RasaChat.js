import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const RasaChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const onSend = (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
    const message = newMessages[0].text;
    sendToRasa(message);
  };

  const sendToRasa = message => {
    axios.post('http://your-rasa-server-endpoint/webhooks/rest/webhook', {
      message,
    })
    .then(response => {
      const botMessages = response.data.map(message => ({
        _id: message.id,
        text: message.text,
        createdAt: new Date(message.timestamp),
        user: {
          _id: 2,
          name: 'Bot',
          avatar: 'https://placeimg.com/140/140/any',
        },
      }));
      setMessages(GiftedChat.append(messages, botMessages));
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setInputText(text)}
          value={inputText}
        />
        <Button
          title="Send"
          onPress={() => {
            sendToRasa(inputText);
            setInputText('');
          }}
        />
      </View>
    </>
  );
};

export default RasaChat;
