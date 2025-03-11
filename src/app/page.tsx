import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import Slider from './components/Slider';

const HomePage = () => {
  return (
    <div>
      {/* SLIDER */}
      <Slider />
      {/* PRODUCT LIST */}
      <div className="mt-24 px-4 ms:px-8 lg:px-16 xl:px-26 2xl:px-64">
        <h2 className="text-2xl uppercase font-semibold">featured product</h2>
        <ProductList />
      </div>
      {/* CATEGORIES */}
      <div className="mt-24">
        <h2 className="text-2xl font-semibold  px-4 md:px-8 lg:px-16 xl:px-26 2xl:px-64 mb-12 uppercase">
          category
        </h2>
        <CategoryList />
      </div>
      {/* NEW PRODUCT LIST */}
      <div className="mt-24 px-4 ms:px-8 lg:px-16 xl:px-26 2xl:px-64">
        <h2 className="text-2xl uppercase font-semibold">new product</h2>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
