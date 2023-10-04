import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import ract_4 from "../../assets/ract-4.png";
import ract_6 from "../../assets/ract-6.png";
import ract_7 from "../../assets/ract-7.png";
import ract_8 from "../../assets/ract-8.png";
import ract_9 from "../../assets/ract9.png";
const ProductView = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="px-28px pt-10 relative">
          <div className="w-[550px] h-[682px] flex flex-col gap-8">
            <div className="relative w-full h-full">
              <img className="w-full h-full" src={ract_4} alt="ractangle 4" />

              <div className="absolute top-1/2 left-0 -translate-y-1/2  -translate-x-1/2 w-[42px] h-[44px] bg-primaryOrange flex items-center justify-center rounded-full">
                <button className="  text-white rounded-full inline-block items-center justify-center">
                  <MdArrowBackIos />
                </button>
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2  translate-x-1/2 w-[42px] h-[44px] bg-primaryOrange flex items-center justify-center rounded-full">
                <button className="  text-white rounded-full inline-block items-center justify-center">
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div>
                <img src={ract_6} alt="" />
              </div>
              <div>
                <img src={ract_7} alt="" />
              </div>
              <div>
                <img src={ract_8} alt="" />
              </div>
              <div>
                <img src={ract_9} alt="" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[25px] h-[25px]">
            <button className=" text-primaryOrange font-bold  text-2xl w-full h-full">
              <RxCross1 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductView;
