const Cta = () => {
  return (
    <section className="bg-[#F5F5F5] lg:lg:h-[464px] mb-[53px] pt-[40px] pb-[40px] lg:pt-[130px] lg:pb-[99px] px-2 lg:px-0">
      <div className="flex flex-col justify-center items-center xl:max-w-[1230px] mx-auto">
        <div className="text-center">
          <p className="text-[#8E062E] text-[1.5rem] lg:text-[2rem]">
            Get started with your <strong>finance & Investment</strong>
          </p>
          <p className="text-[#8E062E] text-[1.5rem] lg:text-[2rem]">
            Join over 3 million people{' '}
          </p>
          <h4 className="text-[#8E062E] text-[2rem] lg:text-[2.5rem] font-bold mb-[47px]">
            who are smart with their FINANCES
          </h4>
        </div>
        <div>
          <button className="getstarted w-[297px] rounded-[22px]  text-white font-bold">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
