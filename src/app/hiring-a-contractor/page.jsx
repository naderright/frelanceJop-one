import TiltleSection from '@/components/TitleSection'
import ContentPara from '@/pages/pagesParagraf/ContentPara'
import React from 'react'

const empeloyer = {
    leftContent: {
        note: false,
        title: 'Consider Hiring On A Contract / Temporary Basis',
        paragraf: 'If you are short staffed, but need to complete a project, consider hiring an engineer, designer/drafter or engineering technician on a contract basis.'
    },

    rightContent: [
        {
            one: 'Advantages of contract / temporary staffing:',
            tow: [
                '\u2713 You may be able to hire from your project’s budget, even if your company has a hiring freeze.',
                '\u2713 You are not bound to a real contract. The contractor works as “employee at will” so there is no penalty of any kind if your project or need ends earlier than expected.',
                '\u2713 Because you control the entire hiring process, the turnaround is very fast.',
                '\u2713 When the hiring freeze is eventually lifted and you are happy with the contractor, you can convert him or her to a direct employee under very reasonable terms.',
            ]

        },
        {
            one: 'Why choose Engineering Resource Group?',
            tow: [
                '\u2713 We have specialized in contract engineering staffing since 1991.',
                '\u2713 We are recognized as the most professional and trusted engineering staffing company in New Jersey.',
                '\u2713 All of our account executives and recruiters are degreed engineers, which means you will be dealing with professionals who understand your needs.',
                '\u2713 We have a full one-week guarantee on contract employees which minimizes your risk.',
                '\u2713 We have the most generous contract employee benefits in the industry, ensuring that our contractor will not leave before your project is completed.',
                
            ]

        },
       

    ]
}

function page() {
  return (
    <div className='py-[6rem]'>
      <TiltleSection tiltle={'Consider Hiring on a Temp Basis'}/>
      <ContentPara data={empeloyer}/>
    </div>
  )
}

export default page
