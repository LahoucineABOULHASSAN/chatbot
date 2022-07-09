const Logo = () => {
  return (
    <div className="px-8 w-60 max-w-full">
      <a href="#Home" className="navbar-logo w-full block py-5">
        <img
          src="/assets/logo.png"
          alt="chat bot logo"
          className="w-12 h-12 header-logo"
        />
      </a>
    </div>
  );
};

export default Logo;
