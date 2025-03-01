import React from 'react'
import TiltleSection from './TitleSection'

function SectionPage({Component,tiltle}) {
  return (
    <div>
       <div className="bg-sky-600 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px] min-h-screen ">
        <TiltleSection tiltle={tiltle} />
        <div className="bg-white clipPath">
          <Component />
        </div>
      </div>
    </div>
  )
}

export default SectionPage
