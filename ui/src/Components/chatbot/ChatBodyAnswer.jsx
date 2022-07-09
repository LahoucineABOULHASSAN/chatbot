import ChatAvatar from "./ChatAvatar";
import moment from "moment";

const ChatBodyAnswer = ({ response, time, isLoading }) => {
  return (
    <>
      <div className="chat-message flex flex-start my-3">
        <ChatAvatar isAv={false} url={"/assets/logo.png"} />
        <div className="flex max-w-xs items-center bg-white rounded-lg rounded-bl-none mx-2">
          <span className="flex text-justify whitespace-pre-line ml-1 h-auto text-gray-800 font-normal rounded-sm px-2 p-1 items-end">
            {response}{" "}
            <small className="text-gray-500 text-xs min-w-fit block lowercase pl-2">
              {moment(time).format("LT")}
            </small>
          </span>
        </div>
      </div>
    </>
  );
};

export default ChatBodyAnswer;
