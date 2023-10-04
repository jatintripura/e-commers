import { RiDeleteBin6Line } from "react-icons/ri";
import ract_10 from "../../assets/ract-10.png";
const Card = () => {
  return (
    <>
      <div className="w-[360px] h-[256px] bg-white rounded-[10px] ">
        <div className=" border-b-2">
          <p className="font-[700] text-[15px] text-NeutralDarkBlue py-[27px] pl-6">
            Cart
          </p>
        </div>
        <div className="flex items-center justify-between px-6 pt-6 pb-7">
          <div>
            <img src={ract_10} alt="ractangle 10" />
          </div>
          <div>
            <div className="text-base font-[500] leading-5 flex flex-col gap-1">
              <p>Fall Limited Edition Sneakers</p>
              <p className="font[700]">$125.00 x 3 $375.00</p>
            </div>
          </div>
          <div className="bg-[#C3CAD9]">
            <RiDeleteBin6Line />
          </div>
        </div>
        <div className="w-full h-[54px] px-6   ">
          <button className="bg-primaryOrange w-full h-full rounded-xl text-white font-bold text-base">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
