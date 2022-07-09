import ChatAvatar from "./ChatAvatar";

const ChatHeader = ({ setChatArr }) => {
  return (
    <div className="p-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute bottom-0 right-0">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
          </div>
          <ChatAvatar isAv={true} url={"/assets/logo.png"} />
        </div>
        <div className="flex flex-col leading-tight">
          <div className="text-2xl mt-1 flex items-center">
            <span className="text-white mr-3">AlgoBot</span>
          </div>
          <span className="text-sm text-gray-200">Algorithm</span>
        </div>
      </div>
      <button
        onClick={() => setChatArr([])}
        className="flex items-center justify-center text-white bg-gray-600 hover:bg-transparent hover:text-red-500 p-4 w-10 h-10 rounded-full ease-in-out"
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default ChatHeader;
