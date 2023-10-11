const Menu = (props) => {
  const { onSectionChanged, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bg-white transition-all overflow-hidden flex flex-col 
        ${menuOpened ? "w-full md:w-80 h-screen" : "w-0 h-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="About" onClick={() => onSectionChanged(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChanged(1)} />
          <MenuButton label="Project" onClick={() => onSectionChanged(2)} />
          {/* <MenuButton label="Contact" onClick={() => onSectionChanged(3)} /> */}
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-800 transition-colors"
    >
      {label}
    </button>
  );
};

export default Menu;
