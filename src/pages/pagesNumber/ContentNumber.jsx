import React from 'react'
import { Phone } from 'lucide-react';

function ContentNumber({ data }) {
  const typeOfGrid = data?.rightContent?.length > 3
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 px-6 py-[4rem] gap-9 h-full'>

      <div className="left  px-[2rem] mx-auto bg-gray-100 flex flex-col items-start gap-3 justify-start p-4 ">
        <h3 className='text-1xl lg:text-2xl font-bold py-5'>{data?.leftContent?.title}</h3>
        <p className='tetx-[1rem] text-gray-600'>{data?.leftContent?.paragraf}</p>
        {data?.leftContent?.paragraf2?<p className='tetx-[1rem] font-bold text-gray-800 pt-3'>{data?.leftContent?.paragraf2}</p>:''}
        {data?.leftContent?.contact?<p className='tetx-[1rem] text-gray-600 font-bold flex gap-2'><Phone/>{data?.leftContent?.contact}</p>:''}
        
      </div>


      <div className={` col-span-2 grid gap-3 ${typeOfGrid ? 'grid-cols-1 md:grid-cols-2 ' : 'grid-cols-1'}`}>
        {/* {data.rightContent[1].one} */}
        {data?.rightContent?.map((content, index) => <div key={index} className='content '>
          <div className=" text-sky-600 flex items-center gap-6">
            <div className="number flex text-[1.5rem] font-bold "><span>0</span> {index + 1}</div>
            <div className="line h-[1px] bg-black w-[10rem] pl-2"></div>
          </div>
          <div className=" flex flex-col">
            <h3 className={`text-sky-700 font-bold py-3 ${typeOfGrid?'md:max-w-[18rem]':''}`}>{content.one}</h3>
           <div className="div flex flex-col">
           {content.tow ? <p className={`${typeOfGrid?'md:max-w-[18rem]':''} text-gray-600`}>{content.tow}</p> :""}
           { content.arr?.map((line, index) => <p key={index}
              className='text-gray-600 py-2'>{line}
            </p>)}
           </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default ContentNumber
