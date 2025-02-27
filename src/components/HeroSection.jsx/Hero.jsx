import React from 'react'
import TextSwitcher from '../textSwitcher'
import { MoveRight } from 'lucide-react';


function Hero() {
    return (
        <div className='hero relative  py-11 px-12 mx-auto  bgHero flex  flex-col md:gap-16  justify-center items-center '>
            <div className="textHero mt-[7rem]">

                <TextSwitcher />
            </div>
            <div className="aboutUs flex  mx-auto justify-between items-start flex-wrap text-white  mt-14  gap-3">
                <div className="WhatWeDo">
                    <h2 className='text-sky-600 font-bold text-[1.4rem] gap-2'>What We Do: </h2>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>
                        We specialize in contract and permanent staffing and recruitment for engineering and engineering support roles, including:</p>
                    <div className="enginer flex flex-col gap-2">
                        <span className='text-[.9rem]  md:max-w-[18rem] font-medium flex items-center '>
                            <MoveRight size={'.9rem'} />
                            Engineers
                        </span>
                        <span className='text-[.9rem]  md:max-w-[18rem] font-medium flex items-center '>
                            <MoveRight size={'.9rem'} />
                            Designers / CAD Drafters
                        </span>
                        <span className='text-[.9rem]  md:max-w-[18rem] font-medium flex items-center '>
                            <MoveRight size={'.9rem'} />
                            Technicians
                        </span>

                        <span className='text-[.9rem]  md:max-w-[18rem] font-medium flex items-center '>
                            <MoveRight size={'.9rem'} />
                            Full List
                        </span>

                    </div>
                </div>
                <div className="OurEperties flex flex-col gap-3">
                    <h2 className='text-sky-600 font-bold text-[1.4rem]'>Our Expertise:</h2>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>
                        We operate across the U.S., partnering with consultants, government agencies, and engineering firms to deliver top-tier talent. Our approach goes beyond traditional recruiting—we collaborate with industry experts to conduct in-depth qualification interviews, ensuring every hire is the right fit for the role.

                    </p>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>
                        Nationwide Reach – Serving clients across the U.S. with a strong presence in key markets.
                    </p>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>
                    Deep Industry Expertise – Our partnerships with engineering firms and government agencies help us vet candidates with precision.
                    </p>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>
                    Experienced Team – Our recruiters have extensive experience in the engineering sector, enabling us to match candidates effectively.
                    </p>
                </div>
                <div className="WhatSetsUsApart:">
                    <h2 className='text-sky-600 font-bold text-[1.4rem]'>What Sets Us Apart:</h2>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>What Sets Us Apart:</p>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>Our recruiters average over 15 years experience.</p>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>All of our staff works out of our Parsippany, NJ office.</p>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>We don't utilize overseas recruiters.</p>
                </div>
                <div className="OurEperties">
                    <h2 className='text-sky-600 font-bold text-[1.4rem]'>A Family Business:</h2>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>Family owned and operated since 1991.</p>
                    <p className='text-[.9rem]  md:max-w-[18rem] font-medium '>We strive to build strong and lasting relationships with both our clients and job seekers.</p>
                </div>
            </div>

        </div>
    )
}

export default Hero
