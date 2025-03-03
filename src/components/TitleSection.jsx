import React from 'react'

const TiltleSection = ({ tiltle }) => {
    return (
        <div>
            <div className=" w-full h-[4rem] text-white flex items-center justify-center
             font-bold mx-auto  text-[1.5rem] md:text-[2rem]">
               {tiltle}
            </div>
        </div>

    )
}

export default TiltleSection
