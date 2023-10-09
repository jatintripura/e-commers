import AddToCard from "../../component/addToCard/AddToCard";
import ControlButton from "../../component/controlButton/ControlButton";
import Header from "../../component/header/Header";
import Product from "../../component/product/Product";

const Layout = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen min-h-screen">
        <Header />
        <div className="pt-[91px] pb-[130]">
          <div className="flex items-center flex-col gap-8  lg:flex-row justify-around">
            <div className="">
              <Product />
            </div>

            <div>
              <div className="font-bold text-[14px] text-primaryOrange leading-5 uppercase  pb-[19px]">
                <p>Sneaker Company</p>
              </div>
              <div className="font-bold text-[44px] leading-[48px] text-NeutralDarkBlue pb-[30px]">
                <p>
                  Fall Limited Edition<br></br>
                  Sneakers
                </p>
              </div>
              <div
                className="text-base font-[500px] leading-7 text-NeutralDarkGrayishBlue pb-[30px]
"
              >
                <p>
                  These low-profile sneakers are your perfect casual wear
                  <br></br>
                  companion. Featuring a durable rubber outer sole, they’ll
                  <br></br>
                  withstand everything the weather can offer.
                </p>
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="flex gap-4">
                  <div className="font-bold text-[30px] leading-7 text-NeutralDarkBlue">
                    <p>$125.00</p>
                  </div>
                  <div className="w-[51px] h-[27px]">
                    <p className="w-full h-full bg-primaryOrangePale text-center rounded text-primaryOrange  font-bold text-base">
                      50%
                    </p>
                  </div>
                </div>
                <div className="font-bold text-base leading-[26px] text-NeutralDarkBlue">
                  <p>$250.00</p>
                </div>
              </div>
              <div className="flex gap-[15px]">
                <div>
                  <ControlButton />
                </div>
                <div>
                  <AddToCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
