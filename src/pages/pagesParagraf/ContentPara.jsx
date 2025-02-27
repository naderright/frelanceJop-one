import { Phone } from 'lucide-react'
import React from 'react'

function ContentPara({data}) {
  return (
    <div className='flex  flex-col md:flex-row px-6 py-[4rem] gap-5'>
    <div className="left  bg-gray-100 flex flex-col  justify-center p-4 md:w-[60rem]">
      <h3 className='text-2xl font-bold py-5'>{data?.leftContent?.title}</h3>
      {data?.leftContent?.note?<span className='font-bold pb-3'>Notes:</span>:''}
      <p className='tetx-[1rem] text-gray-600'>{data?.leftContent?.paragraf}</p>
      <p className='tetx-[1rem] text-gray-600'>{data?.leftContent?.paragraf2}</p>
      {data?.leftContent?.contact?<p className='tetx-[1rem] text-gray-600 flex gap-2 pt-4'><Phone/> Call Us: {data?.leftContent?.contact}</p>:''}
{data?.leftContent?.arr?.map((line,index)=><p key={index} className='text-sky-600 pt-3 text-[1rem]'>- {line} </p>)}

    </div>
    <div className='flex flex-col'>
      {/* {data.rightContent[1].one} */}
      {data?.rightContent?.map((content, index) => <div key={index} className='content '>
       
        <div className=" flex flex-col">
          <h3 className='text-sky-700 font-bold py-3 '>{content.one}</h3>
          {content.tow?.map((line,index)=><p className=' pt-3 text-gray-600' key={index}>{line}</p>)}
        </div>
      </div>
      )}
    </div>
  </div>
  )
}

export default ContentPara
