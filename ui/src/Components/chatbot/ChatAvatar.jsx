const ChatAvatar = ({ isAv, url }) => {
  const avatar = `w-16 h-16 md:w-22 md:h-22 rounded-full`;
  const conv_avatar = `w-8 h-8 md:w-10 md:h-10 border-[4px] border-white shadow-lg rounded-full bg-white`;
  return (
    <img
      src={url || "https://via.placeholder.com/150"}
      alt="avatar bot"
      className={isAv ? avatar : conv_avatar}
    />
  );
};

export default ChatAvatar;
