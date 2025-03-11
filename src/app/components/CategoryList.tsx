import Image from 'next/image';
import Link from 'next/link';

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll ">
      <div className="flex gap-4 md:gap-8">
        {/* START ITEM */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-800 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 font-light text-xl tracking-wide">Cakes</h2>
        </Link>
        {/* END ITEM */}

        {/* START ITEM */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-800 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/853004/pexels-photo-853004.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 font-light text-xl tracking-wide">Cupcakes</h2>
        </Link>
        {/* END ITEM */}

        {/* START ITEM */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-800 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/2424832/pexels-photo-2424832.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 font-light text-xl tracking-wide">Milk Shakes</h2>
        </Link>
        {/* END ITEM */}

        {/* START ITEM */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-800 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/1343465/pexels-photo-1343465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 font-light text-xl tracking-wide">Ice Cream</h2>
        </Link>
        {/* END ITEM */}

        {/* START ITEM */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-800 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/1906435/pexels-photo-1906435.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 font-light text-xl tracking-wide">Sweets</h2>
        </Link>
        {/* END ITEM */}

        {/* START ITEM */}
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-800 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 font-light text-xl tracking-wide">pastry</h2>
        </Link>
        {/* END ITEM */}
      </div>
    </div>
  );
};

export default CategoryList;
