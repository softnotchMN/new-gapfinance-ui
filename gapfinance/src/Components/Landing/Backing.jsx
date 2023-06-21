import Brands from '../../assets/brands.png';
const Backing = () => {
  return (
    <div className="bg-[#F5F5F5] py-[48px] flex flex-col items-center text-center">
      <div>
        <p className="text-[22px] font-[500] text-black mb-[28px]">
          Backed by Africa's Leading Investors
        </p>
        <div>
          <img src={Brands} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Backing;
