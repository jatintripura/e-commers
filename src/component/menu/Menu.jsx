import { RxCross1 } from "react-icons/rx";
const Menu = () => {
  return (
    <>
      <div className="w-[250px] h-screen  bg-slate-500">
        <div className="p-6 text-bold text-[20px]">
          <a href="#">
            <RxCross1 />
          </a>
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
    </>
  );
};
export default Menu;
