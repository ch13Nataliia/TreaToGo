import Link from 'next/link';
import Image from 'next/image';

const Footbar = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-26 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP SECTION */}
      <div className=" flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            {' '}
            <div className="text-2xl tracking-wide">TreaToGo</div>
          </Link>
          <p className="">United Kingdom, Staffordshire, Stafford, CP16 35C</p>
          <span className="font-semibold">example@gamil.com</span>
          <span className="font-semibold">+1234 564 789</span>
          <div className="flex gap-6">
            {' '}
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image
              src="/pinterest.png"
              alt="pinterest"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Cakes</Link>
              <Link href="">Cupcakes</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h2 className="font-medium text-lg uppercase">subscribe</h2>
          <p>
            {' '}
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-3/4 p-4 rounded-l-md"
            />
            <button className="w-1/4 uppercase  text-white bg-[#F35C7A] rounded-r-md">
              join
            </button>
          </div>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>

      {/* BOTTOM SECTIOM */}
      <div></div>
    </div>
  );
};

export default Footbar;
