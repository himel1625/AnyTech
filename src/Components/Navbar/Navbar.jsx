import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { FaBars, FaHome, FaInfoCircle, FaPhone, FaTimes } from 'react-icons/fa';
import { FaEarthAfrica } from 'react-icons/fa6';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=' bg-[#1979e7] p-4 shadow-md'>
      <div className='container mx-auto flex  items-center  justify-center gap-56 text-[#FFFFFF]'>
        <div className='text-2xl '>AnyTech</div>
        <div className='hidden md:flex space-x-8'>
          <ul className='flex gap-10 font-medium items-center justify-center'>
            <li className='relative group flex items-center space-x-1 cursor-pointer'>
              <span className='transition'>Solution</span>
              <ChevronDown className='w-4 h-4 text-[#FFFFFF]  transition' />
              <ul className='absolute left-0 mt-44 w-48 bg-white shadow-lg rounded-sm border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity'>
                <li className='px-4 py-2 text-black font-bold border-b border-gray-200 hover:bg-gray-200 cursor-pointer rounded-t-sm'>
                  AnyCaaS
                </li>
                <li className='px-4 py-2 text-black font-bold border-b border-gray-200 hover:bg-gray-200 cursor-pointer'>
                  AnyBaaS
                </li>
                <li className='px-4 py-2 text-black font-bold hover:bg-gray-200 cursor-pointer rounded-b-sm'>
                  AnyPaaS
                </li>
              </ul>
            </li>
            <li className='hover:text-gray-400 transition'>Services</li>
            <li className='hover:text-gray-400 transition'>About Us</li>
            <li className='hover:text-gray-400 transition'></li>
            <li>
              <div className='relative cursor-pointer'>
                <button
                  onClick={toggleDropdown}
                  className='flex items-center cursor-pointer space-x-2 p-2 border rounded-3xl'
                >
                  <FaEarthAfrica />
                  <span>EN</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#000] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                {isOpen && (
                  <ul className='absolute right-0 mt-2 bg-white w-44 border border-gray-300 rounded-md shadow-lg'>
                    <li className='text-black p-2 border-b border-gray-200 hover:bg-gray-200 cursor-pointer rounded-t-md'>
                      EN (English)
                    </li>
                    <li className='text-black p-2 border-b border-gray-200 hover:bg-gray-200 cursor-pointer'>
                      TH (Thai)
                    </li>
                    <li className='text-black p-2 border-b border-gray-200 hover:bg-gray-200 cursor-pointer'>
                      ID (Bahasa Indonesia)
                    </li>
                    <li className='text-black p-2 hover:bg-gray-200 cursor-pointer rounded-b-md'>
                      TW (Traditional Chinese)
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p className='cursor-pointer font-bold hover:text-[#6ea2f5] hover:bg-white  border-2  border-white rounded-sm h-10 w-32 flex items-center justify-center'>
            <p className='flex items-center justify-center gap-4'>
              Contact Us
              <ChevronDown className='w-4 h-4 transition -rotate-90' />
            </p>
          </p>
        </div>
        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none cursor-pointer'
          >
            {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 mt-16 bg-[#1979e7] text-white p-6 h-96 -transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <ul className='space-y-6'>
          <li className='flex items-center space-x-3 hover:text-gray-300 transition duration-300'>
            <FaHome size={20} />
            <span>Home</span>
          </li>
          <li className='flex items-center space-x-3 hover:text-gray-300 transition duration-300'>
            <FaInfoCircle size={20} />
            <span>About</span>
          </li>
          <li className='flex items-center space-x-3 hover:text-gray-300 transition duration-300'>
            <FaPhone size={20} />
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
