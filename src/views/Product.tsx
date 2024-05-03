import ProductList from "../components/ProductList"

const Product = () => {
  return (
    <>
   <div className="flex flex-col items-center justify-center m-5">
    <h1 className="text-4xl font-bold">Tuotteet</h1>
    <p>Tässä on kaikki tuetteemme. Kaikki leivonnaiset ovat tuoreita sekä käsin leivottu</p>
</div>
      <ProductList />
    </>
  )
}

export default Product