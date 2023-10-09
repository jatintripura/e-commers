import { RxCross1 } from "react-icons/rx";
const Menu = ({ onClick, showMenu }) => {
  const handleClick = () => {
    onClick(false);
  };
  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 transition-[background_1s] duration-300 bg-hidden ${
          showMenu ? "-translate-x-0 " : "-translate-x-full bg-opacity-0"
        }`}
      >
        <div
          className={`w-1/3 h-full bg-slate-100 ${
            showMenu ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 text-bold text-[20px]">
            <button onClick={handleClick}>
              <RxCross1 />
            </button>
          </div>
          <div className="p-6">
            <ul className=" flex flex-col gap-[17px] text-[17px] font-bold leading-5">
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
