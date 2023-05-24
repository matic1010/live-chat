"use client";

import Link from "next/link";
import { FC } from "react";

interface ChatPreviewProps {
  id: string;
  name: string;
  lastMessage: string;
}

const ChatPreview: FC<ChatPreviewProps> = ({ id, name, lastMessage }) => {
  return (
    <div className="flex items-center p-2 border-b dark:border-slate-600">
      <div className="h-10 w-10 mr-4 shrink-0">
        <div className="bg-zinc-400 h-full w-auto rounded-full relative">
          <div className="absolute left-3.5 top-2 text-white dark:text-black">
            {name[0]}
          </div>
        </div>
      </div>
      <Link href={`/chats/${id}`}>
        <div
          onClick={() => console.log("Opening chat")}
          className="flex flex-col cursor-pointer w-full"
        >
          <h4 className="font-semibold dark:text-white">{name}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-light">
            {lastMessage}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ChatPreview;
