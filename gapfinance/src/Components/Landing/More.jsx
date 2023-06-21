import { Zoom } from 'react-awesome-reveal';
import Bg from '../../assets/bg1.png';
import Phone from '../../assets/phone.png';
const More = () => {
  return (
    <section className="bg-[#8e062e]">
      <div className="lg:h-[544px] relative xl:max-w-[1230px] mx-auto">
        <div className="absolute left-0 z-10 ">
          <img src={Bg} alt="Background Image" />
        </div>
        <div>
          <div className="relative z-40 text-white max-w-[395px] mx-auto lg:ml-[4%] pt-[20px] lg:pt-[150px] text-center lg:text-left mb-16 lg:mb-0">
            <Zoom>
              <p className="text-[1.75rem] lg:text-[2.5rem] font-[600]">
                Get more for your
              </p>
              <h1 className="text-[2.5rem] lg:text-[4.5rem] font-bold mb-4 lg:mb-0">
                Finance
              </h1>
              <p className="text-[1rem] leading-[20px] text-center">
                Goodbye charges, hello rewards! With GapFinance you save on fees
                and earn as you spend through discounts and cashback. Get the
                app now and make your money go further.
              </p>
            </Zoom>
          </div>
          <div className="lg:absolute right-0 z-20 bottom-0">
            <img src={Phone} alt="Phone illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
