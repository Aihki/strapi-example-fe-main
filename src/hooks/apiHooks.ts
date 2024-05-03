import { fetchData } from "../lib/utils";
import { Product } from "../types/DBTypes";



const useProducts = () => {
    const getProducts = async (): Promise<Product[]> => {
        const response = await fetchData<{ data: { id: number, attributes: any }[] }>(
            `http://localhost:1337/api/products?populate=*`
        );
        console.log(response)
        return response.data.map(({ id, attributes }) => ({
            id,
            ...attributes 
        }));
        
    };

    const getSingleProduct = async (id: number): Promise<Product> => {
        const response = await fetchData<{ data: { id: number, attributes: any } }>(
            `http://localhost:1337/api/products/${id}?populate=product_image`
        );
        console.log(response.data.attributes);
        return {
            id: response.data.id,
            ...response.data.attributes
        };
    };
    return { getProducts, getSingleProduct }
};




export { useProducts }