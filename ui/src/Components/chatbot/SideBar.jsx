const SideBar = () => {
  return (
    <div className="mx-4 hidden lg:block md:w-2/12">
      <div
        className="bg-blue-800 bg-gradient-to-b from-blue-800 to-[#179BEE] rounded-t-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing text-center wow fadeInUp py-4"
        data-wow-delay=".15s"
      >
        <span className="text-gray-200 font-medium text-base uppercase block">
          Algorithme teacher
        </span>
      </div>
      <img
        className="w-full rounded-b-xl mb-10"
        src="/assets/chat/algo.svg"
        alt="algorithm"
      />
    </div>
  );
};

export default SideBar;
