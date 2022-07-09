const About = () => {
  const p1 =
    "The main idea behind our plateform is to make education more effictive and more addapted to the technologies.";
  const p2 =
    "The chatbot is avalaible 24/7, and privides help for our students whenever they need it.";
  return (
    <section id="about-us" className="p-8 sm:p-10 md:p-16 bg-blue-100">
      <div id="about" className="bg-white wow fadeInUp" data-wow-delay=".2s">
        <div className="shadow-lg border-0  lg:flex items-center justify-between border overflow-hidden">
          <div className="lg:max-w-[565px] xl:max-w-[640px] w-full py-12 px-7 sm:px-12 md:p-16 lg:py-9 lg:px-16 xl:p-[70px]">
            <span className=" text-sm font-medium text-white py-2 px-5 bg-blue-800 inline-block mb-5">
              About Us
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl 2xl:text-[40px] sm:leading-snug text-dark mb-6">
              Learn by Bot.
            </h2>
            <p className="text-base text-gray-500 mb-9 leading-relaxed">{p1}</p>
            <p className="text-base text-gray-500 mb-9 leading-relaxed">{p2}</p>
          </div>
          <div className="hidden md:block text-center">
            <div className="relative inline-block z-10">
              <img
                src="/assets/about-image.svg"
                alt="bg-svg"
                className="mx-auto lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
