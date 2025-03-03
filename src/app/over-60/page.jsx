import TiltleSection from '@/components/TitleSection'
import ContentPara from '@/pages/pagesParagraf/ContentPara'
import React from 'react'

const empeloyer = {
  leftContent: {
    note: false,
    title: 'Are you over the age of 60 or considering retiring?',
    paragraf: ''
  },

  rightContent: [
    {
      one: 'Advantages of contract / temporary jobs:',
      tow: [
        '\u2713 There is zero age discrimination. In fact, your age is an asset - the more experience you have the more valued you are. The average contract position with us is about 10 months; however, many contract jobs go on for several years or convert to direct / permanent positions. ',
        '\u2713 Contract positions pay, on the average, 20 to 30% higher than comparable direct positions.',
        '\u2713 You are paid for all overtime hours.',
        '\u2713 The decision-making process is usually quick – not the several-week process that can be the case with direct / permanent jobs.',
        '\u2713 There is no actual “contract” to sign. It is “employment at will” as with any ordinary job.',
        '\u2713 You would be paid on regular W-2 along with many of the benefits of a traditional direct position, such as',
        '- PTO and holiday pay',
        '- 401k plan',
        '- Company contribution on health insurance (if not covered under Medicare)',
        '- Company contributions toward health insurance',
        'Full compliance with “employer of record” legal requirements, including:',
        '- Unemployment insurance',
        '- Short-term disability insurance',
        '- Workers’ compensation insurance',
        '\u2713 Your benefits would also include all the “employer of record” legal requirements, such as unemployment insurance, short term disability insurance and workers compensation insurance.',

      ]

    },




  ]
}

function page() {
  return (
    <div className='pb-[2rem]'>
      <div className="bgTitle ">
        <TiltleSection tiltle='Over 60?' />
        <div className="bg-white clipPath">
          <ContentPara data={empeloyer} />
        </div>
      </div>
    </div>
  )
}

export default page
