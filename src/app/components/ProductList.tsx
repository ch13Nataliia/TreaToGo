import Link from 'next/link';
import Image from 'next/image';

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {/* START ITEM */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        {/* images */}
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/863006/pexels-photo-863006.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1546892/pexels-photo-1546892.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        {/* content */}
        <div className="flex justify-between">
          <span>Product Name</span>
          <span>£55</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded xl w-max ring-1 ring-[#F35C7A] text-[#F35C7A] hover:bg-[#F35C7A] hover:text-white px-4 py-2 text-xs">
          Add To Cart
        </button>
      </Link>
      {/* END ITEM */}

      {/* START ITEM */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        {/* images */}
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/863006/pexels-photo-863006.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1546892/pexels-photo-1546892.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        {/* content */}
        <div className="flex justify-between">
          <span>Product Name</span>
          <span>£55</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded xl w-max ring-1 ring-[#F35C7A] text-[#F35C7A] hover:bg-[#F35C7A] hover:text-white px-4 py-2 text-xs">
          Add To Cart
        </button>
      </Link>
      {/* END ITEM */}

      {/* START ITEM */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        {/* images */}
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/863006/pexels-photo-863006.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1546892/pexels-photo-1546892.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        {/* content */}
        <div className="flex justify-between">
          <span>Product Name</span>
          <span>£55</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded xl w-max ring-1 ring-[#F35C7A] text-[#F35C7A] hover:bg-[#F35C7A] hover:text-white px-4 py-2 text-xs">
          Add To Cart
        </button>
      </Link>
      {/* END ITEM */}

      {/* START ITEM */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        {/* images */}
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/863006/pexels-photo-863006.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1546892/pexels-photo-1546892.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="24vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
        {/* content */}
        <div className="flex justify-between">
          <span>Product Name</span>
          <span>£55</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-xl w-max ring-1 ring-[#F35C7A] text-[#F35C7A] hover:bg-[#F35C7A] hover:text-white px-4 py-2 text-xs flex ">
          Add To Cart
        </button>
      </Link>
      {/* END ITEM */}
    </div>
  );
};

export default ProductList;
