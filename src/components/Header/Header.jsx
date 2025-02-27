'use client';
import { Menus } from '@/data/navLinks';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../public/logo.jpg'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubnav, setOpenSubnav] = useState(null); // حالة للتحكم في القوائم الفرعية

  // دالة لفتح/إغلاق القائمة الفرعية
  const toggleSubnav = (index) => {
    if (openSubnav === index) {
      setOpenSubnav(null); // إذا كانت القائمة مفتوحة، أغلقها
    } else {
      setOpenSubnav(index); // افتح القائمة الجديدة
    }
  };

  return (
    <nav className="bg-primary text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* الشعار */}
        <div className="text-xl font-bold">
          <Link href={'/'}>
            <Image src={logo} width={120} height={120} alt='alts constration group' className='w-auto h-auto rounded-sm' />

          </Link>
        </div>

        {/* قائمة الناف بار (للكمبيوتر) */}
        <div className="hidden md:flex space-x-6">
          {Menus.map((menu, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleSubnav(index)} // النقر لفتح/إغلاق القائمة الفرعية
                className="hover:text-gray-400 focus:outline-none flex items-center"
              >
                {menu.link ? <Link href={menu.link}>{menu.name}</Link> : menu.name}
                {menu.submenu && ( // إضافة الأيقونة إذا كان هناك قائمة فرعية
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-2 transition-transform duration-200 ${openSubnav === index ? 'transform rotate-180' : ''
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
              {menu.submenu && openSubnav === index && ( // عرض القائمة الفرعية إذا كانت مفتوحة
                <div className="absolute bg-gray-700 mt-2 py-2 rounded-lg shadow-lg min-w-[200px]">
                  {menu.sublinks.map((sublink, subIndex) => (
                    <a
                      key={subIndex}
                      href={sublink.link}
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      {sublink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* زر القائمة (للجوال) */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // أيقونة الإغلاق (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // أيقونة القائمة (Hamburger)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* قائمة الناف بار (للجوال) */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-700`}>
        {Menus.map((menu, index) => (
          <div key={index} className="border-t border-gray-600">
            <button
              onClick={() => toggleSubnav(index)} // النقر لفتح/إغلاق القائمة الفرعية
              className="block w-full text-left px-4 py-2 hover:bg-gray-600 focus:outline-none items-center justify-between"
            >
              <span>{menu.name}</span>
              {menu.submenu && ( // إضافة الأيقونة إذا كان هناك قائمة فرعية
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-200 ${openSubnav === index ? 'transform rotate-180' : ''
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
            {menu.submenu && openSubnav === index && ( // عرض القائمة الفرعية إذا كانت مفتوحة
              <div className="pl-4">
                {menu.sublinks.map((sublink, subIndex) => (
                  <a
                    key={subIndex}
                    href={sublink.link}
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    {sublink.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}