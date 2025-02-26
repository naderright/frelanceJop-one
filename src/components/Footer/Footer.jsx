'use client';
import { useState } from 'react';

export const Menus = [
    {
        name: 'Emplpyers',
        submenu: true,
        sublinks: [
            { name: 'What sets us apart', link: '/' },
            { name: 'Guarantees', link: '/' },
            { name: 'Staffing Fees And Terms', link: '/' },
            { name: 'Consider hiring on a temp basis', link: '/' },
        ],
    },
    {
        name: 'Job seekers',
        submenu: true,
        sublinks: [
            { name: 'What sets us apart', link: '/' },
            { name: 'Consider contract/temp employment', link: '/' },
            { name: 'Over the age of 60?', link: '/' },
            { name: 'Counteroffers', link: '/' },
        ],
    },
  
    {
        name: 'About Us',
        submenu: true,
        sublinks: [
            { name: 'Our Expertise', link: '/' },
            { name: 'All our account executives are degreed engineers', link: '/' },
            { name: 'Over the age of 60?', link: '/' },
            { name: 'Counteroffers', link: '/' },
        ],
    },
    {
        name: 'Contact',
        submenu: true,
        sublinks: [
            { name: 'phone: 02 101089893', link: '/' },
            
        ]
    },
];

export default function Footer() {
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
        <footer className="bg-primary text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {Menus.map((menu, index) => (
                        <div key={index} className="mb-6">
                            <button
                                onClick={() => toggleSubnav(index)} // النقر لفتح/إغلاق القائمة الفرعية
                                className="flex items-center justify-between w-full md:w-auto focus:outline-none"
                            >
                                <span className="text-lg font-semibold">{menu.name}</span>
                                {menu.submenu && ( // إضافة الأيقونة إذا كان هناك قائمة فرعية
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 ml-2 transition-transform duration-200 md:hidden ${openSubnav === index ? 'transform rotate-180' : ''
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
                            {menu.submenu && ( // عرض القائمة الفرعية إذا كانت مفتوحة
                                <div
                                    className={`${openSubnav === index ? 'block' : 'hidden'} md:block mt-2`}
                                >
                                    {menu.sublinks.map((sublink, subIndex) => (
                                        <a
                                            key={subIndex}
                                            href={sublink.link}
                                            className="block text-gray-400 hover:text-white mt-2"
                                        >
                                            {sublink.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between md:text-left ">
                    <p className="text-gray-400 text-center">
                        nadercs2018@gmail.com &copy; {new Date().getFullYear()}
                    </p>
                    <p className="text-gray-400 text-center">
                        Developed by Nader
                    </p>
                </div>
            </div>
        </footer>
    );
}