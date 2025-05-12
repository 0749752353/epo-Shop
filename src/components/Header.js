import { Link, NavLink } from 'react-router-dom';
import Logo from '../asset/logo.png';
import { useCart } from '../context/CartContext';

export const Header = () => {

    const { cartList } = useCart(); // Use the custom hook to access the cart context

const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";

const inactiveClass = "block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"

  return (
    <header>   

<nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-4">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link to="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo } className="h-12" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shop</span>
        </Link>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <p className=''>CartItems : {cartList.length}</p>
        </div>
        <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inactiveClass)} end>Home</NavLink>
                </li>
              
                <li>
                    <NavLink to="/cart" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>Cart</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </header>
  )
}
