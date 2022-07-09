import ChatBodyQuestion from "./ChatBodyQuestion";
import ChatBodyAnswer from "./ChatBodyAnswer";
const ChatBody = ({ chatArr, isLoading }) => {
  return (
    <div
      id="messages"
      // style={{ backgroundImage: `url("/assets/chat/bg-3.jpg")` }}
      className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded  bg-black scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch min-h-[inherit] bg-yellow-100 mx-2"
    >
      {chatArr.length ? (
        chatArr.map((elem, index) => (
          <div key={index}>
            {elem.question && (
              <ChatBodyQuestion question={elem.question} time={elem.time} />
            )}
            {elem.response && (
              <ChatBodyAnswer
                response={elem.response}
                time={elem.time}
                isLoading={isLoading}
              />
            )}
          </div>
        ))
      ) : (
        <div className="flex min-h-[inherit] items-center justify-center flex-col">
          <h1 className="text-white text-sm sm:text-md md:text-lg mb-2">
            Send your question, so that AlgoBot can answer you ...
          </h1>
          <img
            className="w-10/12 md:w-[400px] mx-auto rounded-b-xl mb-10"
            src="/assets/chat/hello-1.gif"
            alt="hello"
          />
        </div>
      )}
    </div>
  );
};

export default ChatBody;
