import { HiOutlineShoppingCart } from "react-icons/hi";
const AddToCard = () => {
  return (
    <>
      <div className="w-[273px] h-[54px]">
        <button className=" w-full h-full bg-primaryOrange flex items-center justify-center gap-4 font-bold text-base text-white rounded-[10px]">
          <HiOutlineShoppingCart />
          <p>Add to cart</p>
        </button>
      </div>
    </>
  );
};
export default AddToCard;
