import React from 'react'

const TiltleSection = ({ tiltle }) => {
    return (
        <div>
            <div className="containerApp flex items-center justify-center">
                <div className="title  text-center rotate-3 group hover:cursor-pointer  text-white ">
                    <h3 className=' bg-black p-2 group-hover:text-four transition-all '>{tiltle}</h3>
                </div>
            </div>
        </div>
    )
}

export default TiltleSection
