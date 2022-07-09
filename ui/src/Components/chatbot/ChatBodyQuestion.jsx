import ChatAvatar from "./ChatAvatar";
import moment from "moment";
const ChatBodyQuestion = ({ question, time }) => {
  return (
    <div className="chat-message flex flex-row-reverse flex-start">
      <ChatAvatar isAv={false} url={"/assets/chat/student.png"} />
      <div className="flex max-w-xs items-center rounded-lg rounded-br-none bg-blue-600 mx-2">
        <span className="px-4 py-1 text-justify whitespace-pre-line text-white items-end justify-center flex items-end">
          {question}{" "}
          <small className="pl-2 lowercase min-w-fit text-left block text-right text-xs text-gray-300">
            {moment(time).format("LT")}
          </small>
        </span>
      </div>
    </div>
  );
};

export default ChatBodyQuestion;
