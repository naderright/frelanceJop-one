import { Phone } from 'lucide-react'
import React from 'react'

function ContentPara({ data }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 px-6 py-[4rem] gap-5 h-full'>
      <div className="left px-[2rem] mx-auto  bg-gray-100 flex flex-col  justify-start p-4 ">
        <h3 className='text-1xl lg:text-2xl font-bold py-5'>{data?.leftContent?.title}</h3>
        <div className={`note ${data?.leftContent?.note?'bg-primary2':''}`}>
          {data?.leftContent?.note ? <span className='font-bold pb-5 '>Note:</span> : ''}
          <p className={`text-gray-600 ${data?.leftContent?.note ?' text-[.8rem] ':' text-[1rem] ' }`}>{data?.leftContent?.paragraf}</p>
          <p className='tetx-[1rem] text-gray-600'>{data?.leftContent?.paragraf2}</p>
          {data?.leftContent?.contact ? <p className='text-[1rem] text-gray-600 font-bold flex gap-2 pt-4'><Phone /> Call Us: {data?.leftContent?.contact}</p> : ''}
          {data?.leftContent?.arr?.map((line, index) => <p key={index} className='text-sky-600 pt-3 text-[1rem]'>- {line} </p>)}

        </div>

      </div>
      <div className=' col-span-2 flex flex-col max-w-[28rem] md:max-w-[44rem//]'>
        {/* {data.rightContent[1].one} */}
        {data?.rightContent?.map((content, index) => <div key={index} className='content '>

          <div className=" flex flex-col">
            <h3 className='text-sky-700 font-bold py-3 '>{content.one}</h3>
            {content.tow?.map((line, index) => <p className={` ${line.charAt(0) == '-'?'text-sky-500 pl-4':''} pt-3 text-gray-600`}  key={index}>{line}</p>)}
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default ContentPara
