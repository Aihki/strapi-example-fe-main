import { useEffect, useState } from "react";
import { useProducts } from "../hooks/apiHooks";
import { Product } from "../types/DBTypes";
import { Link } from "react-router-dom";

const Home = () => {
  const { getFeaturedProducts } = useProducts();
  const [products, setProducts] = useState<Product[]>([]);

  const getFeatured = async () => {
    try {
      const products = await getFeaturedProducts();
      setProducts(products);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getFeatured();
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="bg-[url('./assets/img/coffeehero.jpeg')] bg-cover w-full h-screen">
          <div className="bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-center items-center flex-col">
            <div className="text-white text-4xl font-bold text-center">
              <h1>Best Coffee in Town</h1>
              <p>Discover the best coffee in town</p>
            </div>
            <Link
              to="/products"
              className="bg-white text-black px-4 py-2 rounded-md mt-10"
            >
              <button>Products</button>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="mt-10 text-center text-2xl font-bold">
        Featured products
      </h3>
      <div className="flex flex-wrap justify-center m-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-stretch max-w-sm bg-white rounded-md shadow-md m-2"
          >
            <img
              className="h-48 w-full object-cover rounded-t-md"
              src={`http://localhost:1337${product.product_image.data.attributes.url}`}
              alt={product.product_name}
            />
            <div>
              <h2 className="text-xl font-bold tracking-tight text-black text-center">
                {product.product_name}
              </h2>
              <p className="mb-1 font-normal text-gray-700 text-center">
                {product.description}
              </p>
              <p className="text-gray-900 text-center font-bold">
                ${product.product_price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
