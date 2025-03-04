import TiltleSection from '@/components/TitleSection'
import ContentNumber from '@/pages/pagesNumber/ContentNumber'
import React from 'react'
const empeloyer = {
  leftContent: {
    title: 'How Does This Benefit You?',
    paragraf: 'We believe we offer superior staffing and recruiting service for our candidates for the following reasons:'
  },

  rightContent: [
    {
      one: 'All of our account executives are degreed engineers',
      tow: 'This enables us to better understand your technical job specs, resulting in stronger candidates for your needs.'

    },
    {
      one: 'Our recruiters average more than 15 years of experience with us.',
      tow: 'You’ll be dealing with the same competent recruiter year after year, a recruiter who understands your company and your staffing needs.'

    },
    {
      one: 'Our goal is to create long-term relationships with our candidates',
      arr: [
        '\u2713 We always try to offer career advice that will benefit our candidates for the long term.',
        '\u2713 We depend on referrals from our candidates – we would not be in business for long if it were not for positive referrals.',
      ]

    },
    {
      one: 'Recruitment Standards and Ethical Practices',
      arr: [
        '\u2713 We treat all of our candidates with personal and professional respect throughout the process.',
        '\u2713 All of our recruiters work in Us. We do not employ (or utilize in any way) overseas recruiters/personnel.',
      ]

    },
  ]
}
function page() {
  return (
    <div className='pb-[2rem]'>

      <div className="bgTitle ">
        <TiltleSection tiltle={'What Sets Us Apart?'} />
        <div className="bg-white clipPath">
          <ContentNumber data={empeloyer} />
        </div>
      </div>
    </div>
  )
}

export default page
