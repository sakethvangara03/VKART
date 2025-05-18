// Navbar.jsx
import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login'); // Redirect to login page
    window.location.reload(); // Clear all states
  };

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img className="w-40" src={assets.logo} alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} className="w-5 cursor-pointer" src={assets.search_icon} alt="" />
        <div className="group relative">
          <img onClick={() => navigate('/login')} className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 text-gray-500 rounded">
              <p onClick={() => {}} className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={handleLogout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img onClick={() => setVisible(true)} className="w-5 cursor-pointer sm:hidden" src={assets.menu_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
