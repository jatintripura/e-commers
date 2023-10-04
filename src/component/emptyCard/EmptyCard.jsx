const EmptyCard = () => {
  return (
    <>
      <div className="w-[360px] h-[256px] bg-white rounded-[10px] ">
        <div className=" border-b-2">
          <p className="font-[700] text-[15px] text-NeutralDarkBlue py-[27px] pl-6">
            Cart
          </p>
        </div>
        <div className="w-full h-[177px] flex items-center justify-center">
          <h1 className="text-[15px] font-bold text-NeutralDarkGrayishBlue">
            Your cart is empty.
          </h1>
        </div>
      </div>
    </>
  );
};
export default EmptyCard;
