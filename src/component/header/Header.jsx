import { HiOutlineShoppingCart } from "react-icons/hi";
import av_1 from "../../assets/av-1.png";
import Number from "../numer/Number";
const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between py-10">
        <div className="flex items-center justify-center gap-14">
          <div>
            <h1 className="font-[700] text-[31px] text-black leading-8 cursor-pointer ">
              sneakers
            </h1>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-8 text-NeutralDarkGrayishBlue font[400] text-[15px]">
              <li>
                <a href="#">Collections </a>
              </li>
              <li>
                <a href="#">Men </a>
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
        <div className=" flex items-center justify-center  gap-12">
          <div className="w-[22px] h-[20px] relative">
            <div className=" text-NeutralDarkGrayishBlue w-full h-full">
              <HiOutlineShoppingCart />
            </div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              <Number />
            </div>
          </div>
          <div>
            <img src={av_1} alt="avatar 1" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
