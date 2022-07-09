const Header = () => {
  return (
    <header
      id="carouselExampleCaptionsFull"
      className="carousel slide carousel-fade relative h-screen"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden h-screen">
        <div className="carousel-item active relative float-left w-full h-screen bg-no-repeat bg-cover bg-center bg-black">
          <video
            className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              src="https://mdbootstrap.com/img/video/Lines.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute bg-transparent top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div className="flex justify-center items-center h-full">
              <div className="text-white text-center px-14 px-md-0">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Welcome to Learn by Bot
                </h2>
                <h5 className="hidden md:block text-lg font-semibold mb-6">
                  A simple platform to help your students in computer science.
                </h5>
                <div className="md:space-x-2">
                  <a
                    type="button"
                    className="inline-block px-6 py-2 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    href="#chat"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
