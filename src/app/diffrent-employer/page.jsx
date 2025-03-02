import TiltleSection from '@/components/TitleSection'
import ContentNumber from '@/pages/pagesNumber/ContentNumber'
import React from 'react'
//\u2713
const empeloyer = {
  leftContent: {
    title: 'How does this benefit you?',
    paragraf: 'We take pride in delivering exceptional staffing and recruiting services for our clients. Here’s why:'
  },

  rightContent: [
    {
      one: 'Engineering Expertise',
      tow: 'All of our account executives hold engineering degrees, allowing us to thoroughly understand your technical job requirements and present highly qualified candidates.'

    },
    {
      one: 'Experienced Recruiters',
      tow: 'Our recruiters have been with us for an average of 15+ years. This means you’ll work with the same knowledgeable recruiter year after year—someone who truly understands your company and hiring needs. '

    },
    {
      one: 'Industry-Leading Guarantees',
      tow: 'We stand by our placements with some of the strongest guarantees in the industry:',
      arr: [
        '\u2713 Permanent placements: 6-month guarantee',
        '\u2713 Contract placements: 1-week guarantee'
      ]

    },
    {
      one: 'Strategic Staffing Partnership',
      tow: 'We go beyond recruiting—we serve as your staffing consultant to help you build a strong team.',
      arr: [
        '\u2713 Assist in defining your staffing needs',
        '\u2713 Help craft detailed job descriptions',
        '\u2713 Advise on competitive salary ranges to attract top talent while staying within budget'
      ]
    },
  ]
}


function page() {
  return (
    <div className='pb-[2rem]'>
      <div className="bgTitle">
        <TiltleSection tiltle={'what sets us apart ?'} />
        <div className="bg-white clipPath">
          <ContentNumber data={empeloyer} />
        </div>
      </div>

    </div>
  )
}

export default page
