import React from 'react'

function ContentPage({data}) {
  return (
    <div className='flex  flex-col md:flex-row px-6 py-[4rem] gap-5'>
    <div className="left  bg-gray-100 flex flex-col  justify-center px-4 md:w-[60rem]">
      <h3 className='text-2xl font-bold py-5'>{data?.leftContent?.title}</h3>
      {data?.leftContent?.note?<span className='font-bold pb-3'>Notes:</span>:''}
      <p className='tetx-[1rem] text-gray-600'>{data?.leftContent?.paragraf}</p>
    </div>
    <div className='flex flex-col'>
      {/* {data.rightContent[1].one} */}
      {data?.rightContent?.map((content, index) => <div key={index} className='content '>
       
        <div className=" flex flex-col">
          <h3 className='text-sky-700 font-bold py-3 '>{content.one}</h3>
           <p className=' text-gray-600'>{content.tow}</p> 
           {content.three?<p className=' text-gray-600 pt-2'>{content.tow}</p>:''}
        </div>
      </div>
      )}
    </div>
  </div>
  )
}

export default ContentPage
