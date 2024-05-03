import { useEffect, useState } from "react";
import { useProducts } from "../hooks/apiHooks";
import { Product } from "../types/DBTypes";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { getSingleProduct } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  const getProduct = async () => {
    try {
      console.log(Number(id));
      const product = await getSingleProduct(Number(id));
      console.log(product);
      setProduct(product);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return product ? (
    <div className="flex flex-col items-center justify-center h-[90%] p-4">
      <div className="w-[55%]  h-full">
        <div className="max-w-full  bg-white rounded-lg border border-gray-200 shadow-md m-4 p-4">
          <img
            className="w-full object-cover mx-auto"
            src={`http://localhost:1337${product.product_image.data.attributes.url}`}
            alt={product.product_name}
          />
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-black text-center">
              {product.product_name}
            </h2>
            <p className="mb-1 text-2xl font-normal text-gray-700 text-center">
              {product.description}
            </p>
            <p className="text-gray-900 text-2xl text-center font-bold">
              ${product.product_price}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Error happened</div>
  );
};

export default SingleProduct;
