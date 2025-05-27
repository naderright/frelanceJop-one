import React from 'react'

function ContentPage({ data }) {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 px-6   h-screen items-start pt-[4rem] justify-center gap-6'>
      <div className="left px-[2rem] mx-auto  bg-gray-100 flex flex-col   justify-start p-4 ">
        <h3 className='text-1xl lg:text-2xl font-bold py-5'>{data?.leftContent?.title}</h3>
        <div className="note bg-primary2 rounded-sm p-6">
          {data?.leftContent?.note ? <span className='font-bold py-5'>Note:</span> : ''}
          <p className={`text-gray-600 ${data?.leftContent?.note ?' text-[.8rem] ':' text-[1rem] ' }`}>{data?.leftContent?.paragraf}</p>
        </div>

      </div>
      <div className='flex flex-col col-span-2 max-w-[22rem] md:max-w-[44rem]'>
        {/* {data.rightContent[1].one} */}
        {data?.rightContent?.map((content, index) => <div key={index} className='content '>

          <div className=" flex flex-col">
            <h3 className='text-sky-700 font-bold py-3 '>{content.one}</h3>
            <p className=' text-gray-600'>{content.tow}</p>
            {content.three ? <p className=' text-gray-600 pt-2'>{content.three}</p> : ''}
          </div>

        </div>
        )}
      </div>
    </div>
  )
}

export default ContentPage
