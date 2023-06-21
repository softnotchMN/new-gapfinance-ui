import Quote from '../../assets/quote.png';
const Happy = () => {
  return (
    <section className="bg-[#F4E7EB] h-[464px] py-[49px] mb-[41px] px-[10px] lg:px-0">
      <div className="xl:max-w-[1230px] mx-auto">
        <div className="text-[#8E062E]">
          <h3 className="text-[1.75rem] font-[600]">Our happy clients</h3>
          <p className="text-[15px]">What they say about us</p>
        </div>
        <div className="h-[288px] relative max-w-[606px] mx-auto px-[5%] ">
          <img src={Quote} alt="Quote icon" className="absolute z-10 center" />
          <p className="relative z-40 pt-[40px] lg:pt-[70px] text-center text-[12px] sm:text-[14px] md:text-[1rem]">
            If there is anything more than five star, I will give GapFinance.
            They are wondeful and unique in every aspect.
          </p>
          <div className="flex items-center gap-4 relative z-40 justify-end">
            <img
              src="https://pixels.com/images/overview/apparel/womensTshirts002.jpg"
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <h5 className="text-[#8E062E] text-[15px] font-[600]">
              Frank Davis
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happy;
