import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";




const Layout = () => {
    return (
<div className="bg-neutral-300 dark:bg-neutral-800 dark:text-white flex flex-col min-h-screen">
  <header>
  <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">Kahvila</span>
    </div>
    <ul className="flex justify-end text-white">
      <li className="block mt-4 lg:inline-block lg:mt-0 text-grey-200  hover:text-white mr-4">
        <Link to="/">Home</Link>
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4">
        <Link to="/products">Products</Link>
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
  </header>
  <main>
    <Outlet />
  </main>
  <footer>
    <Footer />
  </footer>
</div>

 );

}

export default Layout;