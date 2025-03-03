'use client'
import React, { useState } from 'react';
import TextSwitcher from '../textSwitcher';
import { MoveRight } from 'lucide-react';
import { poup } from '@/data/poup';
import Popup from '../popup';

function Hero() {
    // حالة التحكم في النافذة المنبثقة
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // دالة لفتح النافذة وتمرير البيانات
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    // دالة لإغلاق النافذة
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='hero relative py-11 mx-auto bgHero flex flex-col md:gap-16'>
            <div className="textHero mt-[4rem] mx-auto px-5 ">
                <TextSwitcher />
            </div>

            <div className="aboutUs flex gap-3 md:gap-16 px-4 pb-4 container mx-auto justify-between md:justify-center items-start px-6 flex-wrap text-white mt-14">
                <div className="WhatWeDo">
                    <h2 className='text-sky-600 font-bold text-[1.4rem] gap-2'>What We Do:</h2>
                    <p className='text-[.9rem] md:max-w-[22rem] font-medium'>
                        We specialize in contract and permanent staffing and recruitment for engineering and engineering support roles, including:
                    </p>
                    <div className="enginer flex flex-col gap-2">
                        <span className='text-[.9rem] md:max-w-[22rem] font-medium flex items-center'>
                            <MoveRight size={'.9rem'} />
                            Engineers
                        </span>
                        <span className='text-[.9rem] md:max-w-[22rem] font-medium flex items-center'>
                            <MoveRight size={'.9rem'} />
                            Designers / CAD Drafters
                        </span>
                        <span className='text-[.9rem] md:max-w-[22rem] font-medium flex items-center'>
                            <MoveRight size={'.9rem'} />
                            Technicians
                        </span>

                        {/* زر فتح النافذة المنبثقة */}
                        <span 
                            onClick={openPopup} 
                            className='text-[.9rem] cursor-pointer md:max-w-[22rem] font-medium flex items-center text-sky-500 hover:text-sky-300 transition-all'
                        >
                            <MoveRight size={'.9rem'} />
                            Full List
                        </span>
                    </div>
                </div>

                <div className="OurEperties flex flex-col gap-3">
                    <h2 className='text-sky-600 font-bold text-[1.4rem]'>Our Expertise:</h2>
                    <p className='text-[.9rem] md:max-w-[22rem] font-medium'>
                        We operate across the U.S., partnering with consultants, government agencies, and engineering firms to deliver top-tier talent.
                    </p>
                    <p className='text-[.9rem] md:max-w-[22rem] font-medium'>
                        Nationwide Reach – Serving clients across the U.S. with a strong presence in key markets.
                    </p>
                    <p className='text-[.9rem] md:max-w-[22rem] font-medium'>
                        Deep Industry Expertise – Our partnerships with engineering firms and government agencies help us get candidates with precision.
                    </p>
                    <p className='text-[.9rem] md:max-w-[22rem] font-medium'>
                        Experienced Team – Our recruiters have extensive experience in the engineering sector, enabling us to match candidates effectively.
                    </p>
                </div>

                <div className="WhatSetsUsApart:">
                    <h2 className='text-sky-600 font-bold text-[1.4rem]'>What Sets Us Apart:</h2>
                    <p className='text-[.9rem] md:max-w-[22rem] font-medium'>Engineering Expertise.</p>
                    <p className='text-[.9rem] md:max-w-[22rem] font-medium'>Experienced Recruiters.</p>
                    <p className='text-[.9rem] md:max-w-[22rem] font-medium'>Strategic Staffing Partnership</p>
                </div>
            </div>

            <p className='text-[1rem] md:text-[2.6rem] container px-9 text-center max-w-[70rem] text-white w-full mx-auto font-thin'>
                We provide engineering and engineering support staffing for both
                <span className='text-sky-500'> contract / temporary and direct / permanent</span> jobs.
            </p>

            {/* مكون النافذة المنبثقة */}
            {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={closePopup} data={poup} />}
        </div>
    );
}

export default Hero;
