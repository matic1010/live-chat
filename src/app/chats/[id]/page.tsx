"use client";

import { FC } from "react";
import chats from "../../../../json/chats.json";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Message from "./Message";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const currentChat = chats.find((chat) => chat.id === id);
  // const currentChat = chats.find((chat) => (chat.id = id));
  return (
    <div className="flex flex-col h-screen justify-between">
      <nav className="flex py-4 px-2 w-full h-16 bg-slate-600">
        <div className="flex items-center">
          <Link href={"/chats"}>
            <ArrowLeft className="text-white mr-4" />
          </Link>
          <h3
            className="
            text-lg
          dark:text-white"
          >
            {currentChat?.name}
          </h3>
        </div>
      </nav>
      <main className="flex flex-col w-full">
        {currentChat?.messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            isFromUser={message.userIsSender}
          />
        ))}
      </main>
      <div className="h-16 bg-slate-600">Input goes here</div>
    </div>
  );
};

export default Page;
