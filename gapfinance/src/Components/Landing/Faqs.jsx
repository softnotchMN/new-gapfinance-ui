import { Zoom } from 'react-awesome-reveal';

const Faqs = () => {
  return (
    <section className="flex flex-col justify-center items-center xl:max-w-[1230px] mx-auto px-2 lg:px-0">
      <h3 className="text-[#363251] font-medium text-[1.5rem] lg:text-[2.75rem] mb-[54px]">
        Frequently asked questions
      </h3>
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-[67px] text-center mb-[46px]">
        <Zoom right>
          <div>
            <h5 className="text-small text-[0.9rem] font-[800] mb-[20px]">
              Does GapFinance® report how much money I receive to the IRS?
            </h5>
            <p className="text-small text-[0.688rem] font-[500]">
              These FAQ are for informational purposes and only relate to the
              Gap Finance Network®. GapFinance® does not provide tax advice. If
              you have any tax questions about your individual situation, please
              consult a tax or legal professional.
            </p>
            <a href="#" className="text-[#8E062E]">
              Read more
            </a>
          </div>
        </Zoom>
        <Zoom right>
          <div>
            <h5 className="text-small text-[0.9rem] font-[800] mb-[20px]">
              Someone sent me money with GapFinance®, how do I receive it?
            </h5>
            <p className="text-small text-[0.688rem] font-[500]">
              If you have already enrolled with Zelle®, you do not need to take
              any further action. The money will move directly into your bank
              account associated with your profile, typically within minutes!
            </p>
            <a href="#" className="text-[#8E062E]">
              Read more
            </a>
          </div>
        </Zoom>
        <Zoom right>
          <div>
            <h5 className="text-small text-[0.9rem] font-[800] mb-[20px]">
              Does GapFinance® offer Cashback on funds and bill payments?
            </h5>
            <p className="text-small text-[0.688rem] font-[500]">
              Yes, we offer mouth-watering cashbacks on every bill payment and
              fund transfer. Cashbacks are kept safe in the reward segment of
              your app and can be used for airtime purchase, bill payment and
              others.
            </p>
            <a href="#" className="text-[#8E062E]">
              Read more
            </a>
          </div>
        </Zoom>
      </div>
      <div className="flex flex-col justify-center">
        <button className="getstarted mb-[31px] h-[66px] w-[90vw] mx-auto lg:w-[448px] text-white font-bold">
          VIEW MORE QUESTIONS
        </button>
      </div>
    </section>
  );
};

export default Faqs;
