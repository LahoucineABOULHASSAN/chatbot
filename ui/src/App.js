import { useState, useEffect } from "react";
import { Nav, Header, Footer } from "./Components";
import { ChatBot, About, Contact } from "./pages";

const App = () => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("hidden");

  const handleVisibleButton = (e) => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 150) {
      return setshowGoTop("flex");
    } else if (scrollPosition < 150) {
      return setshowGoTop("hidden");
    }
  };
  const handleScrollUp = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <main>
      <Nav />
      <Header />
      <ChatBot />
      <About />
      <Contact />
      <Footer />
      <button
        onClick={() => handleScrollUp()}
        className={`${showGoTop} items-center justify-center fixed bottom-8 right-8 left-auto z-[999] p-2 w-10 h-10 bg-blue-600 leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <span>
          <i className="fa-solid fa-arrow-up"></i>
        </span>
      </button>
    </main>
  );
};

export default App;
