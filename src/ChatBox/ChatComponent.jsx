import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import UserContext from '../Contex/CreateContex';
import { io } from 'socket.io-client';
import axios from 'axios';
import landimg from '../assets/chatlan.png';
import gsap from 'gsap';

const socket = io('http://localhost:3500', { withCredentials: true });

const ChatComponent = () => {
  const info = useSelector((state) => state.infoData.info);
  const { userDataFromSignup } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [reciever, setReciever] = useState();
  const [landingPage, setLandingPage] = useState(false);

  const imgRef = useRef(null);
  const headerRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    // Apply GSAP animation to the image
    gsap.to(imgRef.current, {
      duration: 3,
      rotateY: 360,
      ease: 'power3.out', // Optional easing
      onComplete: () => {
        // Start bounce animation after rotation
        gsap.to(headerRef.current, {
          duration: 1,
          opacity: 1,
          ease: 'power3.out',
        });

        // Animate the span text with bounce effect
        gsap.fromTo(
          spanRef.current,
          {
            y: -50,
            opacity: 0,
          },
          {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'bounce.inOut',
            delay: 0.5, // Optional delay for a better effect
          }
        );

        gsap.to(imgRef.current, {
          y: -20,
          duration: 0.5,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        });
      },
    });
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('chat/showAllMessages', {
          withCredentials: true,
        });
        setMessages(response.data.messages);
        if (response.data.checkUser) {
          setReciever(response.data.checkUser);
          setLandingPage(true);
        }

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
      await axios.post(
        'chat/sendMessage',
        {
          senderId: userDataFromSignup._id,
          messageText,
        },
        { withCredentials: true }
      );
      setMessageText(''); // Clear input field after sending message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex h-full flex-col ms-32">
      {landingPage ? (
        <>
          <div className="flex-1 overflow-y-scroll bg-gray-200">
            <div className="px-3 py-2 relative">
              <div className="mb-2 flex items-center bg-white p-2 rounded-sm sticky top-0 border border-blue-200 shadow-xl">
                <img
                  className="mr-2 h-8 w-8 rounded-full object-cover"
                  src={reciever?.profilePicture || 'https://picsum.photos/50/50'}
                  alt="User Avatar"
                />
                <div className="font-medium">{reciever?.username}</div>
              </div>
              {messages.map((message) => (
                <div
                  key={message._id}
                  className={`flex items-center my-3 ${userDataFromSignup._id === message.sender._id ? 'justify-end' : ''}`}
                >
                  {userDataFromSignup._id !== message.sender._id && (
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={message.sender.profilePicture || 'https://picsum.photos/50/50'}
                      alt="User Avatar"
                    />
                  )}
                  <div
                    className={`max-w-sm rounded-lg p-2 shadow ${
                      userDataFromSignup._id === message.sender._id ? 'bg-blue-500 text-white' : 'bg-white'
                    }`}
                  >
                    {message.message}
                  </div>
                  {userDataFromSignup._id === message.sender._id && (
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={message.sender.profilePicture || 'https://picsum.photos/50/50'}
                      alt="User Avatar"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-2 border border-blue-200 rounded-lg">
            <form className="flex items-center" onSubmit={handleSendMessage}>
              <input
                className="mr-2 w-full rounded-full border px-4 py-2"
                type="text"
                placeholder="Type your message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <button type="submit" className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700">
                Send
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="w-full h-[100vh] bg-teal-300 flex justify-center items-center">
          <div>
            <img src={landimg} alt="" className="w-96 mb-5" ref={imgRef} />
            <h1 ref={headerRef} className="text-center text-5xl font-semibold opacity-0">
              Chat <span ref={spanRef} className="text-blue-600 border bg-gray-300 border-l-8 p-1 border-purple-800 border-t-4 opacity-0">BOX</span>
            </h1>
            <p className="text-center mt-4">Powered by Blog Bites</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
