import { FC } from "react";

interface MessageProps {
  text: string;
  isFromUser: boolean;
}

const Message: FC<MessageProps> = ({ text, isFromUser }) => {
  return (
    <div
      className={`
        ${
          isFromUser
            ? "self-end bg-slate-400 mr-4"
            : "self-start bg-slate-500 ml-4"
        }
        py-1 px-2 rounded-md
        mb-2
      `}
    >
      {text}
    </div>
  );
};

export default Message;
