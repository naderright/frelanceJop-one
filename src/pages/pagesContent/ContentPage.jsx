import React from 'react'

function ContentPage({ data }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 px-6 py-[4rem] gap-5 -skew-x-6'>
      <div className="left  bg-gray-100 flex flex-col   justify-center p-4 ">
        <h3 className='text-2xl font-bold py-5'>{data?.leftContent?.title}</h3>
        <div className="note bg-teal-100 rounded-sm p-2">
          {data?.leftContent?.note ? <span className='font-bold py-3'>Note:</span> : ''}
          <p className='tetx-[1rem] text-gray-600'>{data?.leftContent?.paragraf}</p>
        </div>

      </div>
      <div className='flex flex-col col-span-2 '>
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
