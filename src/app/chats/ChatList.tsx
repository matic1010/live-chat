import { FC } from "react";
import chats from "../../../json/chats.json";
import ChatPreview from "@/app/chats/ChatPreview";

interface ChatListProps {}

const ChatList: FC<ChatListProps> = ({}) => {
  return (
    <ul className="overflow-scroll">
      {chats.map((chat) => (
        <ChatPreview
          key={chat.id}
          id={chat.id}
          name={chat.name}
          lastMessage={chat.messages[0].text}
        />
      ))}
    </ul>
  );
};

export default ChatList;
