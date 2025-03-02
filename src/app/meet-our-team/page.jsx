import TiltleSection from '@/components/TitleSection'
import ContentNumber from '@/pages/pagesNumber/ContentNumber'
import React from 'react'
const empeloyer = {
  leftContent: {
    note: true,
    title: 'Why We’re New Jersey’s Most Trusted Engineering Staffing Firm',
    paragraf2: 'Call us today to speak with our management or one of our experienced recruiters: ',
    contact: '(917) 277 3611'
  },

  rightContent: [
    {
      one: 'Engineering Expertise',
      arr: [
        '\u2713 All of our account executives are degreed engineers with at least five years of industry experience',
        '\u2713 This ensures the highest level of technical understanding, leading to better job placements for both candidates and clients.'
      ]

    },
    {
      one: 'A Team-Oriented Approach',
      arr: [
        '\u2713 Unlike many staffing firms, we work as a team—not as individual recruiters competing for placements.',
        '\u2713 You may work with multiple recruiters to ensure you find the right job, not just any job.',

      ]
    },
    {
      one: 'Decades of Industry Experience',
      arr: [
        '\u2713 Our recruiters average over 15 years of experience with us.',
        '\u2713 You’ll work with seasoned professionals who truly understand the engineering job market—not someone who’s still in training.',
      ]
    },

  ]
}

function page() {
  return (
    <div className='pb-[2rem]'>
      <div className="bgTitle">
        <TiltleSection tiltle='Meet Our Team' />
        <div className="bg-white clipPath">
          <ContentNumber data={empeloyer} />
        </div>
      </div>
    </div>
  )
}

export default page
