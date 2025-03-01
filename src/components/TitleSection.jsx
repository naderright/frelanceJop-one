import React from 'react'

const TiltleSection = ({ tiltle }) => {
    return (
        <div>
            <div className=" w-full h-[4rem] text-white flex items-center justify-center font-bold text-[1.6rem]">
               {tiltle}
            </div>
        </div>

    )
}

export default TiltleSection
