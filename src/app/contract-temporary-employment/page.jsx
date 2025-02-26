import TiltleSection from '@/components/TitleSection'
import ContentPara from '@/pages/pagesParagraf/ContentPara'
import React from 'react'
const empeloyer = {
    leftContent: {
        note: false,
        title: 'Contract/ temporary employment has always been an important part of the engineering industry. Normally, companies hire contract engineers, designer/ drafters and technicians on as-needed project basis. However, companies also hire contractors when they have long-term project needs but don’t have the budget to hire permanent employees.',
        paragraf: ''
    },

    rightContent: [
        {
            one: 'Advantages of contract / temporary jobs:',
            tow: [
                '\u2713 The average contract position with us is about 10 months; however, many contract jobs go on for several years or convert into permanent positions.',
                '\u2713 Contract positions pay, on the average, 20 to 30% higher than comparable direct/ permanent positions.',
                '\u2713 The decision-making process is usually quick – not the several-week process that can be the case with direct/ permanent jobs.',
                '\u2713 There is no actual “contract” to sign. It is “employment at will” as with any ordinary job. You would be paid on regular W-2 basis, along with many of the benefits of a traditional direct position, such as',
                '\u2713 Your benefits would also include all the “employer of record” legal requirements, such as unemployment insurance, short term disability insurance and workers compensation insurance.'
            ]

        },
        
    
       

    ]
}

function page() {
  return (
    <div>
      <TiltleSection tiltle={'Consider Contract / Temporary Employment'}/>
      <ContentPara data={empeloyer}/>
    </div>
  )
}

export default page
