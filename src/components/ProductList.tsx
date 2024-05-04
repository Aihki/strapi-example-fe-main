import { useEffect, useState } from "react";
import { useProducts } from "../hooks/apiHooks";
import { Product } from "../types/DBTypes";
import { Link } from "react-router-dom";


const ProductList = () => {
  const { getProducts } = useProducts();
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    try {
      const products = await getProducts();
      console.log(products);
      setProducts(products);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const productsByType = products.reduce<Record<string, Product[]>>(
    (acc, product) => {
      if (!acc[product.product_type]) {
        acc[product.product_type] = [];
      }
      acc[product.product_type].push(product);
      return acc;
    },
    {}
  );

  return (
    <div className="flex flex-col items-center m-5">
      {Object.entries(productsByType).map(([productType, products]) => (
        <div key={productType} className="w-[50%] m-3">
          <h1 className="text-center text-2xl text-bold">{productType}</h1>
          <div className="grid grid-cols-3 justify-start">
            {products.map((product) => (
              <div
                key={product.id}
                className="max-w-sm bg-white rounded-md shadow-md m-2"
              >
            <Link to={`/product/${product.id}`}>
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
                  <p className="text-gray-900 text-center font-bold">${product.product_price}</p>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
