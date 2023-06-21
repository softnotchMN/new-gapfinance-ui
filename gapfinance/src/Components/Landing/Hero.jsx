import Landing from '../../assets/hero.png';
import Chart from '../../assets/chart.png';
import Gap from '../../assets/gap.png';
import App from '../../assets/app.png';
import Bg from '../../assets/bg1.png';
import Mob from '../../assets/mob.png';
import { Fade, Slide } from 'react-awesome-reveal';
const Hero = () => {
  return (
    <main className="pb-[60px] lg:mb-0 lg:pb-[182px] bg-[#F4E7EB]">
      <div className="bg-[#8e062e] lg:bg-transparent lg:h-[869px]">
        <div className="hidden lg:block lg:absolute z-10 w-[100%] top-0">
          <img src={Gap} alt="" className="w-[100%] h-[700px]" />
        </div>
        <div className="lg:hidden absolute z-30 w-[100%] top-0">
          <img src={Bg} alt="" className="w-[100%] h-[700px]" />
        </div>
        <div className="flex flex-col lg:flex-row gap-[66px] relative z-30 text-white mb-20 lg:mb-0">
          <div className="pt-[100px] lg:w-[70%]">
            <div className="w-[100%]">
              <div className="hidden lg:block max-w-[545px] mx-auto">
                <Fade cascade damping={0.5}>
                  <h1 className="text-[55px] leading-[72px] font-[500] mb-4 pop">
                    Secure Your <br /> Finances With <br />
                    <strong className="text-[75px]">Gap Finance</strong>
                  </h1>
                  <p className="text-[14px] font-[500] mb-4">
                    Gap finance offers a user friendly interface, seamless
                    payment options, and easy account management, Download now
                    to start banking hassle-free
                  </p>
                </Fade>
                <div>
                  <img src={App} alt="" />
                </div>
              </div>

              <div className="lg:hidden flex flex-col items-center text-center px-[8px]">
                <Fade cascade damping={0.5}>
                  <h1 className="text-[2.5rem] lg:text-[55px] leading-[52px] font-[500] mb-4 pop">
                    Secure Your Finances With{' '}
                    <strong className="text-[2.75rem] lg:text-[75px]">
                      Gap Finance
                    </strong>
                  </h1>
                  <p className="text-[14px] font-[500] mb-4">
                    Gap finance offers a user friendly interface, seamless
                    payment options, and easy account management, Download now
                    to start banking hassle-free
                  </p>
                </Fade>
                <div>
                  <img src={App} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[30%] hidden lg:block"></div>

          <div className="hidden lg:block absolute right-20 -top-10">
            <img src={Landing} alt="Mobile Phone" />
          </div>
          <div className="lg:hidden">
            <img
              src={Mob}
              alt="Mobile Phone"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center xl:max-w-[1230px] mx-auto gap-[66px] px-2 lg:px-0">
        <Slide duration="1500" direction="left">
          <div className="">
            <img src={Chart} alt="Chart illustration" />
          </div>
        </Slide>
        <Slide duration="1500" direction="right">
          <div className="pop">
            <h3 className="text-small text-[2.5rem] ln">
              Stay In Control Of <br /> Your Investment <br /> With{' '}
              <strong className="font-bold">Gap Finance</strong>
            </h3>
          </div>
        </Slide>
      </div>
    </main>
  );
};

export default Hero;
