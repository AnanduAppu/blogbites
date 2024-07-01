import React from 'react';

const ChatComponent = () => {
  return (
    <div className="flex h-full flex-col ms-32">
      <div className="flex-1 overflow-y-scroll bg-gray-200">
        <div className="px-4 py-2">
          <div className="mb-2 flex items-center bg-white p-2 rounded-sm">
            <img className="mr-2 h-8 w-8 rounded-full" src="https://picsum.photos/50/50" alt="User Avatar" />
            <div className="font-medium">John Doe</div>
          </div>
          <div className="mb-2 max-w-sm rounded-lg bg-white p-2 shadow">Hi, how can I help you?</div>
          <div className="flex items-center justify-end">
            <div className="mr-2 max-w-sm rounded-lg bg-blue-500 p-2 text-white shadow">Sure, I can help with that.</div>
            <img className="h-8 w-8 rounded-full" src="https://picsum.photos/50/50" alt="User Avatar" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2">
        <div className="flex items-center">
          <input className="mr-2 w-full rounded-full border px-4 py-2" type="text" placeholder="Type your message..." />
          <button className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
