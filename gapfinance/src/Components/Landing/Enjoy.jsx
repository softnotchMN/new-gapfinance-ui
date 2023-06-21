import { Slide } from 'react-awesome-reveal';
import Pay from '../../assets/pay.png';
const Enjoy = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center xl:max-w-[1230px] mx-auto gap-[66px] mb-[40px] lg:mb-0 px-2 lg:px-0">
      <div className="flex-1">
        <Slide duration="1500" direction="left">
          <img src={Pay} alt="Pay illustration" />
        </Slide>
      </div>
      <div className="flex-1">
        <Slide duration="1500" direction="right">
          <h3 className="text-lg mb-[13px] text-[2rem] text-center lg:text-left lg:text-[3.75rem]">
            Enjoy FAST and RELIABLE payments
          </h3>
          <p className="text-md text-center lg:text-left">
            It's fast and free to send money to any GapFinance user or bank
            account. Enjoy seamless and fast delivery. 99% of our customers has
            voted us as the most reliable payment platform
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default Enjoy;
