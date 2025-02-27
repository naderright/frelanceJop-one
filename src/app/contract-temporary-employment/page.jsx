import TiltleSection from '@/components/TitleSection'
import ContentPara from '@/pages/pagesParagraf/ContentPara'
import React from 'react'
const empeloyer = {
  leftContent: {
    note: false,
    paragraf: `The Value of Contract/Temporary Employment in Engineering :-
Contract and temporary employment has long played a vital role in the engineering industry. While companies often hire contract engineers, designers/drafters, and technicians on a project-by-project basis, they also turn to contract staffing for long-term projects when permanent hiring isn't feasible due to budget constraints.
`
  },

  rightContent: [
    {
      one: 'Advantages of Contract/Temporary Jobs:',
      tow: [
        `\u2713 Job Duration & Stability : -
The average contract position with us lasts about 10 months, with many extending several years or transitioning into permanent roles.
`,
        `\u2713 Higher Pay : -
Contract positions typically offer 20–30% higher pay compared to similar direct/permanent roles.
`,
        `\u2713 Faster Hiring Process : -
Unlike permanent jobs that can take weeks to finalize, contract job offers are made quickly, allowing you to start working sooner.
`,
        `\u2713 No Long-Term Commitment
There’s no formal contract to sign—contract roles are “employment at will,” just like traditional jobs.
`,
        `\u2713 Competitive Benefits : -

You’ll be paid on a regular W-2 basis and receive benefits comparable to permanent positions, including:
**Paid Time Off (PTO) & holiday pay
**401(k) retirement plan
**Company contributions toward health insurance
**Full compliance with “employer of record” legal requirements, including:
**Unemployment insurance
**Short-term disability insurance
**Workers’ compensation insurance
`
      ]

    },




  ]
}

function page() {
  return (
    <div className='pt-[6rem]'>
      <TiltleSection tiltle='Consider Contract / Temporary Employment' />
      <ContentPara data={empeloyer} />
    </div>
  )
}

export default page
