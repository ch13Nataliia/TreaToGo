import React from 'react';
import ProductImages from '../components/ProductImages';

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-26 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-1/2 lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* CONTENT */}
      <div className="w-1/2 lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-4xl font-medium">Product Name</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero hic,
          tempora asperiores excepturi obcaecati a id esse sapiente harum sed.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <span className="text-xl text-gray-500 line-through">£59</span>
          <span className="font-medium text-2xl">£49</span>
        </div>
        <div className="h-[2px] bg-gray-100" />
      </div>
    </div>
  );
};

export default SinglePage;
