import TiltleSection from '@/components/TitleSection'
import ContentPara from '@/pages/pagesParagraf/ContentPara'
import React from 'react'

const empeloyer = {
  leftContent: {
    note: false,
    title: 'Your Trusted Partner in Engineering Staffing & Recruiting',
    paragraf: 'Since 1991, Engineering Resource Group (ERG) has specialized in staffing and recruiting for engineering and engineering support professions across various employment types:',
    arr: [
      'Contract/Temporary Positions',
      'Contract-to-Direct Placements',
      'Direct/Permanent Positions',

    ]
  },

  rightContent: [
    // {
    //     one: 'Our staffing expertise is concentrated in:',
    //     tow: [
    //         'New Jersey',
    //     'New York City Metro Area (including Fairfield County, CT)',
    //     'Philadelphia Metro Area',
    //     'We prioritize local candidates and those planning to relocate to the area — not out-of-state applicants seeking remote work.',
    //     'All recruiting is conducted in-house from our Parsippany, NJ office — never outsourced overseas — ensuring you work with professionals who truly understand the local job market and engineering industry.',

    //     ]

    // },
    {
      one: 'What Sets Us Apart?',
      tow: [
        '\u2713 Engineering Expertise',
        'All account executives hold 4-year engineering degrees and have at least 5 years of industry experience, delivering a level of competence unmatched in the staffing industry.',
        '\u2713 Experienced Recruiters',
        '      Our recruiters average over 15 years of experience with ERG, providing you with consistent, knowledgeable guidance.',

        '\u2713 Comprehensive Benefits Package',
        '       We offer one of the most generous benefits packages for contract employees, including:',
        '- Up to 75% contribution toward health insurance premiums',
        '- Paid holidays',
        '- Paid Time Off (PTO)',
        '- 401(k) plan with company match',
        'A Legacy of Success',
        "We've placed hundreds of engineers who advanced to become managers and returning clients. Many of our placements from 10 or even 20 years ago continue to trust us when they're ready for their next career move.",
        'Our Core Values:',
        '- Kindness',
        '- Honesty',
        '- Experience',
        'Let us help you take the next step in your career!'
      ]

    },




  ]
}

function page() {
  return (
    <div className='pb-[2rem]'>

      <div className="bg-sky-600 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px] min-h-screen ">
        <TiltleSection tiltle='Our Expertise' />
        <div className="bg-white clipPath">
          <ContentPara data={empeloyer} />
        </div>
      </div>
    </div>
  )
}

export default page
