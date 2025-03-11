import ProductList from './components/ProductList';
import Slider from './components/Slider';

const HomePage = () => {
  return (
    <div>
      {/* SLIDER */}
      <Slider />
      {/* PRODUCT LIST */}
      <div className='mt-24 px-4 ms:px-8 lg:px-16 xl:px-26 2xl:px-64'>
        <h2 className='text-2xl uppercase font-semibold'>featured product</h2>
        <ProductList />
      </div>
      {/* CATEGORIES */}
      {/* NEW PRODUCT LIST */}
    </div>
  );
};

export default HomePage;
