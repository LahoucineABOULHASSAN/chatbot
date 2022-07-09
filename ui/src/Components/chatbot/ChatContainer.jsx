import Axios from "axios";
import { useState, useCallback, useEffect } from "react";

import ChatBody from "./ChatBody";
import ChatForm from "./ChatForm";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState();
  const [chatArr, setChatArr] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    message.trim().length !== 0 && setMessage("");
    message && message.trim().length !== 0 && postData(message);
  };
  const postData = useCallback(
    (message) => {
      setChatArr((chatArr) => [
        ...chatArr,
        { question: message, time: Date.now() },
      ]);
      setIsLoading(true);
      const url = process.env.REACT_APP_API_URL;
      const fetchData = async () => {
        try {
          const res = await Axios.post(url, { message });
          if (res.status !== 200) {
            throw Error("Couldn't get res");
          } else {
            setChatArr((chatArr) => [...chatArr, res.data]);
            setIsLoading(false);
            setMessage("");
          }
        } catch (err) {
          const error =
            err.message === "Network Error"
              ? "Network Error, Please Check Your Internet Connection"
              : err.message;
          console.log(error);
        }
      };
      fetchData();
    },
    [setMessage]
  );
  useEffect(() => {
    const el = document.getElementById("messages");
    el.scrollTop = el.scrollHeight;
  }, [chatArr]);
  return (
    <div className="w-full lg:w-10/12 md:mx-4">
      <div
        className="bg-black shadow rounded-xl relative z-10 overflow-hidden shadow-md text-center wow fadeInUp"
        data-wow-delay=".1s"
      >
        <div className="flex-1 p:2 sm:px-6 justify-between flex flex-col overflow-auto min-h-[400px] max-h-screen">
          <ChatHeader setChatArr={setChatArr} />
          <ChatBody chatArr={chatArr} isLoading={isLoading} />
          {isLoading && (
            <div className="w-full flex items-end space-x-1 px-4 animate-pulse">
              <small className="text-sm text-gray-200">typing</small>
              <div className="flex items-end space-x-1 pb-1">
                <div className="w-[4px] h-[4px] bg-white rounded-full motion-safe:animate-bounce"></div>
                <div className="w-[4px] h-[4px] bg-white rounded-full animate-bounce"></div>
                <div className="w-[4px] h-[4px] bg-white rounded-full motion-safe:animate-bounce"></div>
              </div>
            </div>
          )}
          <ChatForm
            handleSubmit={handleSubmit}
            setMessage={setMessage}
            setChatArr={setChatArr}
            message={message}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
