import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const ControlButton = () => {
  return (
    <>
      <div className="w-[157px] h-[55px] ">
        <button className="w-full h-full   bg-NeutralLightGrayishBlue flex items-center justify-between px-5 rounded-[10px]">
          <button className="text-primaryOrange">
            <AiOutlineMinus />
          </button>
          <p className="text-base font-bold text-black">0</p>
          <button className="text-primaryOrange">
            <AiOutlinePlus />
          </button>
        </button>
      </div>
    </>
  );
};
export default ControlButton;
