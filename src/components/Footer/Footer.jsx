'use client';
import { useState } from 'react';
import logo from '../../../public/logo.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react'
import ContinuousText from '../textSlideContainous';



export const Menus = [
    {
        name: 'Employers',
        submenu: true,
        sublinks: [
            { name: "Submit staffing request", link: "/staffing-request" },
            { name: "What sets us apart?", link: "/diffrent-employer" },
            { name: "Guarantee", link: "/employer-guarantee" },
        ],
    },
    {
        name: 'Job seekers',
        submenu: true,
        sublinks: [
            { name: "What sets us apart", link: "/what-sets-us-apart" },
            // { name: "Benefits", link: "/benefits" },

        ],
    },

    {
        name: 'About Us',
        submenu: true,
        sublinks: [
            { name: 'Our Expertise', link: '/our-expertise' },
            { name: 'Meet Our Team', link: '/meet-our-team' },
            { name: 'We are degreed engineers', link: '/meet-our-team' },

        ],
    },
    {
        name: 'Contact',
        submenu: true,
        sublinks: [
            { icon: 'Phone', name: '(917)-277-3611', link: ' tel:9172773611' },
            { icon: 'Mail', name: 'Email', link: 'mailto:info@alisconstructiongroup.com' }
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
            < ContinuousText />
            <div className="container mx-auto pt-5 px-4 flex flex-col  ">

                <div className="grid grid-cols-1 items-start md:grid-cols-5 gap-8">
                    <div className="logo  ">
                        <Image src={logo} alt='alts constration group' className='w-[12rem] h-auto rounded-sm' />
                        <div className="text text-[.8rem] text-gray-500 ">
                            <p>30 years of experience as the most professional and trusted engineering staffing firm in New Jersey</p>
                        </div>
                    </div>

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

                                        <Link
                                            key={subIndex}
                                            href={sublink.link}
                                            className=" text-gray-400 hover:text-white mt-2 flex items-center gap-2"
                                        >
                                            {sublink.icon == 'Phone' ? <Phone /> : sublink.icon == 'Mail' ? <Mail /> : ''}   {sublink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between md:text-left ">
                    <p className="text-gray-400 text-center">
                        Copyright © 2025 Alis Construction Group - All Rights Reserved.
                    </p>
                    <p className="text-gray-400 text-center">
                        info@alisconstructiongroup.com
                    </p>
                </div>
            </div>
        </footer>
    );
}