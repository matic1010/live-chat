import { FC } from "react";
import ChatList from "./ChatList";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div>
      <ChatList />
    </div>
  );
};

export default Page;
