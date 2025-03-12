'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/6341572/pexels-photo-6341572.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/4110007/pexels-photo-4110007.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/2680603/pexels-photo-2680603.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/4187672/pexels-photo-4187672.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative mt-8">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className=" flex justify-between gap-4 mt-4 cursor-pointer">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative mt-8 "
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
