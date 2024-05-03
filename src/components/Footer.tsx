import { Link } from "react-router-dom";



const Footer = () => {


  return (
<footer className="bg-slate-800  text-white p-4">
  <div className="container mx-auto">
    <div className="flex flex-row justify-center items-center">

      <div className="w-2/5 px-2 sm:px-4">
        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
        <ul className="block sm:inline-block">
         <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About us</Link></li>
        </ul>
      </div>
      <div className="w-2/5 px-2 sm:px-4 order-last text-left">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p>Parhaat kahvit sekä leivoinnaiset neliö metrin alueelta </p>
      </div>
    </div>
    <div className="mt-4 text-center">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
