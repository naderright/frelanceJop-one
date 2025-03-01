import React from 'react'
import TextSwitcher from '../textSwitcher'
import { MoveRight } from 'lucide-react';


function Hero() {
    return (
        <div className='hero relative  py-11  mx-auto  bgHero flex  flex-col md:gap-16 '>
            <div className="textHero mt-[7rem]">

                <TextSwitcher />
            </div>
            <div className="aboutUs flex gap-2  px-4 pb-4 container mx-auto justify-between items-start flex-wrap text-white  mt-14  ">
                <div className="WhatWeDo">
                    <h2 className='text-sky-600 font-bold text-[1.4rem] gap-2'>What We Do: </h2>
                    <p className='text-[.9rem]  md:max-w-[22rem] font-medium '>
                        We specialize in contract and permanent staffing and recruitment for engineering and engineering support roles, including:</p>
                    <div className="enginer flex flex-col gap-2">
                        <span className='text-[.9rem]  md:max-w-[22rem] font-medium flex items-center '>
                            <MoveRight size={'.9rem'} />
                            Engineers
                        </span>
                        <span className='text-[.9rem]  md:max-w-[22rem] font-medium flex items-center '>
                            <MoveRight size={'.9rem'} />
                            Designers / CAD Drafters
                        </span>
                        <span className='text-[.9rem]  md:max-w-[22rem] font-medium flex items-center '>
                            <MoveRight size={'.9rem'} />
                            Technicians
                        </span>

                        <span className='text-[.9rem]  md:max-w-[22rem] font-medium flex items-center '>
                            <MoveRight size={'.9rem'} />
                            Full List
                        </span>

                    </div>
                </div>
                <div className="OurEperties flex flex-col gap-3">
                    <h2 className='text-sky-600 font-bold text-[1.4rem]'>Our Expertise:</h2>
                    <p className='text-[.9rem]  md:max-w-[22rem] font-medium '>
                        We operate across the U.S., partnering with consultants, government agencies, and engineering firms to deliver top-tier talent. Our approach goes beyond traditional recruiting—we collaborate with industry experts to conduct in-depth qualification interviews, ensuring every hire is the right fit for the role.

                    </p>
                    <p className='text-[.9rem]  md:max-w-[22rem] font-medium '>
                        Nationwide Reach – Serving clients across the U.S. with a strong presence in key markets.
                    </p>
                    <p className='text-[.9rem]  md:max-w-[22rem] font-medium '>
                        Deep Industry Expertise – Our partnerships with engineering firms and government agencies help us vet candidates with precision.
                    </p>
                    <p className='text-[.9rem]  md:max-w-[22rem] font-medium '>
                        Experienced Team – Our recruiters have extensive experience in the engineering sector, enabling us to match candidates effectively.
                    </p>
                </div>
                <div className="WhatSetsUsApart:">
                    <h2 className='text-sky-600 font-bold text-[1.4rem]'>What Sets Us Apart:</h2>
                    <p className='text-[.9rem]  md:max-w-[22rem] font-medium '>What Sets Us Apart:</p>
                    <p className='text-[.9rem]  md:max-w-[22rem] font-medium '>Engineering Expertise.</p>
                    <p className='text-[.9rem]  md:max-w-[22rem] font-medium '>Experienced Recruiters.</p>
                    <p className='text-[.9rem]  md:max-w-[22rem] font-medium '>Strategic Staffing Partnership</p>
                </div>

            </div>

            <p className='text-[1rem] md:text-[1.6rem] container px-4 text-center max-w-[50rem] text-white w-full mx-auto  font-thin '>We provide engineering and engineering support staffing for both
                <span className='text-sky-500'> contract / temporary and direct / permanent</span> jobs.
            </p>

        </div>
    )
}

export default Hero
