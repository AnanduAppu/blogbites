import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserContext from '../Contex/CreateContex';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3000', { withCredentials: true });

const ChatComponent = () => {
  const info = useSelector((state) => state.infoData.info);
  const { userDataFromSignup } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3015/chat/showAllMessages', { withCredentials: true });
        setMessages(response.data.messages);
        socket.emit('joinRoom', response.data.chatId);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    socket.on('newMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, [info, userDataFromSignup._id]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3015/chat/sendMessage', {
        senderId: userDataFromSignup._id, messageText
      }, { withCredentials: true });
      setMessageText(''); // Clear input field after sending message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex h-full flex-col ms-32">
      <div className="flex-1 overflow-y-scroll bg-gray-200">
        <div className="px-4 py-2">
          <div className="mb-2 flex items-center bg-white p-2 rounded-sm">
            <img className="mr-2 h-8 w-8 rounded-full object-cover" src={info?.profilePicture || "https://picsum.photos/50/50"} alt="User Avatar" />
            <div className="font-medium">{info?.username}</div>
          </div>
          {messages.map((message) => (
            <div key={message._id} className={`flex items-center my-3 ${userDataFromSignup._id === message.sender._id ? 'justify-end' : ''}`}>
              {userDataFromSignup._id !== message.sender._id && (
                <img className="h-8 w-8 rounded-full object-cover" src={message.sender.profilePicture || "https://picsum.photos/50/50"} alt="User Avatar" />
              )}
              <div className={`max-w-sm rounded-lg p-2 shadow ${userDataFromSignup._id === message.sender._id ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                {message.message}
              </div>
              {userDataFromSignup._id === message.sender._id && (
                <img className="h-8 w-8 rounded-full object-cover" src={message.sender.profilePicture || "https://picsum.photos/50/50"} alt="User Avatar" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2">
        <form className="flex items-center" onSubmit={handleSendMessage}>
          <input
            className="mr-2 w-full rounded-full border px-4 py-2"
            type="text"
            placeholder="Type your message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button type="submit" className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
