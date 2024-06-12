import React from "react";
import ChatComponent from "./ChatComponent";
import FriendsListing from "./FreindsListing";

function ChatAssemble() {
  return (
    <div>
        <FriendsListing/>
      <div className="h-[88vh] sm:ml-64">
        <div className="h-full rounded-lg border-2 border-dashed border-gray-200 p-1.5 dark:border-gray-700">
            <ChatComponent/>
        </div>
      </div>
    </div>
  );
}

export default ChatAssemble;
