import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // Fetch welcome message from Rasa chatbot API
    fetch('http://192.168.1.249:5005/webhooks/rest/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: '/get_started'
      })
    })
      .then(response => response.json())
      .then(data => {
        setMessages([{
          text: data[0].text,
          sender: 'bot'
        }]);
      });
  }, []);

  const sendMessage = () => {
    // Send user message to Rasa chatbot API
    fetch('http://192.168.1.249:5005/webhooks/rest/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: inputText
      })
    })
      .then(response => response.json())
      .then(data => {
        setMessages([
          ...messages,
          {
            text: inputText,
            sender: 'user'
          },
          {
            text: data[0].text,
            sender: 'bot'
          }
        ]);
        setInputText('');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rasa Chatbot</Text>
      <View style={styles.messageContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.sender === 'bot' ? styles.botMessage : styles.userMessage
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message here"
        />
        <Button
          title="Send"
          onPress={sendMessage}
          disabled={!inputText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  messageContainer: {
    flex: 1
  },
  message: {
    maxWidth: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#ccc'
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e6e6e6'
  },
  messageText: {
    fontSize: 16
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  }
});
