import ract_4 from "../../assets/ract-4.png";
import ract_6 from "../../assets/ract-6.png";
import ract_7 from "../../assets/ract-7.png";
import ract_8 from "../../assets/ract-8.png";
import ract_9 from "../../assets/ract9.png";
const Product = () => {
  return (
    <>
      <div className="w-full lg:w-[447px]  aspect-square lg:h-[567px]">
        <div className=" flex flex-col gap-8">
          <div className="w-full h-full">
            <img src={ract_4} alt="ractangle 4" />
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <img className="" src={ract_6} alt="" />
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
      </div>
    </>
  );
};
export default Product;
