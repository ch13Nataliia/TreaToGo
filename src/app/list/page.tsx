import Image from 'next/image';
import React from 'react';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const ListPage = () => {
  return (
    <div className="px-4 md:px-6 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="hidden bg-pink-50 px- sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br />
            Selected Products
          </h1>
          <button className="rounded-3xl w-max py-3 px-5 bg-[#F35C7A]  text-white">
            Byu Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="https://images.pexels.com/photos/27469964/pexels-photo-27469964/free-photo-of-a-woman-is-cutting-a-pink-cake.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      <Filter />
      <h2 className="mt-12 text-xl font-semibold">Cakes For You</h2>
      <ProductList />
    </div>
  );
};

export default ListPage;
