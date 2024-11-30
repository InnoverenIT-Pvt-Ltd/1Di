import React from 'react';

const promotions = [
  {
    title: 'Tier 1',
    min: '$800 Min',
    discount: '3% Off',
    offer: 'Plus FFA',
  },
  {
    title: 'Tier 2',
    min: '$800 Min',
    discount: '3% Off',
    offer: 'Plus FFA',
  },
  {
    title: 'Tier 3',
    min: '$800 Min',
    discount: '3% Off',
    offer: 'Plus FFA',
  },
  {
    title: 'Tier 4',
    min: '$800 Min',
    discount: '3% Off',
    offer: 'Plus FFA',
  },
  {
    title: 'Tier 5',
    min: '$800 Min',
    discount: '3% Off',
    offer: 'Plus FFA',
  },
];

const Q2SpecialtyPromotion = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
    <h2 className="text-center text-2xl font-bold text-blue-800">
      Q2 2024 Specialty Promotion
    </h2>
    <div className="flex justify-between mt-4">
      {promotions.map((promo, index) => (
        <div
          key={index}
          className=" rounded-2xl shadow-2xl w-[14rem] items-center bg-white p-4 text-center border border-gray-200"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-1">
            {promo.title}
          </h3>
          <div class="w-full h-[1px] bg-black rounded"></div>
          <div className="text-[#1124AA]  mt-2">
            <div className='flex justify-between'>
            <p className="font-medium text-xl text-[#1124AA]">{promo.min}</p>
            -
            <p className="font-medium text-xl text-[#1124AA]">{promo.discount}</p>
            </div>
            <p className="font-medium text-xl text-[#1124AA] ">{promo.offer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Q2SpecialtyPromotion;
