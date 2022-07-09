const ChatForm = ({ handleSubmit, setMessage, message }) => {
  return (
    <div className="my-3">
      <form
        action="POST"
        onSubmit={(event) => {
          event.preventDefault();
          message && message.trim().length !== 0
            ? handleSubmit(event)
            : setMessage("");
        }}
        className="relative flex  bg-gray-200 rounded-md mx-2"
      >
        <span className="absolute inset-y-0 flex items-center">
          <button
            onClick={() => setMessage("")}
            type="button"
            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:text-red-800 hover:bg-gray-300 focus:outline-none"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </span>
        <input
          type="text"
          name="question"
          value={message}
          placeholder="Write your message"
          className="w-full bg-transparent focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 px-12 py-3"
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <div className="absolute right-0 items-center inset-y-0 sm:flex">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none mr-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 mx-2 transform rotate-90 text-blue-500"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatForm;
