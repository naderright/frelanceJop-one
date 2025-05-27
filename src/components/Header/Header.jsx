'use client';
import { Menus } from '@/data/navLinks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import logo from '../../../public/logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubnav, setOpenSubnav] = useState(null);
  const navRef = useRef(null);

  // إغلاق القوائم الفرعية عند الضغط خارج النافبار
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenSubnav(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubnavToggle = (index) => {
    setOpenSubnav((prev) => (prev === index ? null : index));
  };

  const handleMobileClose = () => {
    setIsMenuOpen(false);
    setOpenSubnav(null);
  };

  return (
    <nav className="bg-primary text-white sticky top-0 w-full z-50" ref={navRef}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* اللوجو */}
        <div className="text-xl font-bold">
          <Link href="/" onClick={() => setOpenSubnav(null)}>
            <Image src={logo} alt="Alis Construction Group" className="w-[12rem] h-auto rounded-sm" />
          </Link>
        </div>

        {/* قائمة الديسكتوب */}
        <div className="hidden md:flex space-x-6">
          {Menus.map((menu, index) => (
            <div key={index} className="relative">
              {menu.submenu ? (
                <>
                  {/* زر فتح القائمة الفرعية */}
                  <button
                    onClick={() => handleSubnavToggle(index)}
                    className="hover:text-gray-400 focus:outline-none flex items-center"
                    aria-expanded={openSubnav === index}
                    aria-controls={`submenu-${index}`}
                  >
                    {menu.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-2 transition-transform duration-200 ${openSubnav === index ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* القائمة الفرعية */}
                  {openSubnav === index && (
                    <div
                      id={`submenu-${index}`}
                      role="menu"
                      className="absolute bg-gray-700 mt-2 py-2 rounded-lg shadow-lg min-w-[200px]"
                    >
                      {menu.sublinks.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sublink.link}
                          className="block px-4 py-2 hover:bg-gray-600"
                          onClick={() => setOpenSubnav(null)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                // رابط مباشر لو ما فيه submenu
                <Link href={menu.link} className="hover:text-gray-400" onClick={() => setOpenSubnav(null)}>
                  {menu.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* زر الموبايل */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            // أيقونة الإغلاق
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // أيقونة الهامبرغر
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* قائمة الموبايل */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-700`}>
        {Menus.map((menu, index) => (
          <div key={index} className="border-t border-gray-600">
            {menu.submenu ? (
              <>
                {/* زر فتح القائمة الفرعية في الموبايل */}
                <button
                  onClick={() => handleSubnavToggle(index)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-600 focus:outline-none flex items-center justify-between"
                  aria-expanded={openSubnav === index}
                  aria-controls={`mobile-submenu-${index}`}
                >
                  {menu.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-200 ${openSubnav === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* القائمة الفرعية للموبايل */}
                {openSubnav === index && (
                  <div id={`mobile-submenu-${index}`} className="pl-4">
                    {menu.sublinks.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.link}
                        className="block px-4 py-2 hover:bg-gray-600"
                        onClick={handleMobileClose}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              // رابط مباشر في الموبايل
              <Link href={menu.link || '#'} className="block px-4 py-2 hover:bg-gray-600" onClick={handleMobileClose}>
                {menu.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
