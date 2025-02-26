import TiltleSection from '@/components/TitleSection'
import ContentNumber from '@/pages/pagesNumber/ContentNumber'
import React from 'react'
//\u2713
const empeloyer = {
  leftContent: {
    title: 'How does this benefit you?',
    paragraf: 'We believe we offer superior staffing and recruiting service for our clients for the following reasons:'
  },

  rightContent:  [
      {
        one: 'All of our account executives are degreed engineers.',
        tow: 'This enables us to better understand your technical job specs, resulting in stronger candidates for your needs.'

      },
      {
        one: 'Our recruiters average more than 15 years of experience with us.',
        tow: 'You’ll be dealing with the same competent recruiter year after year, a recruiter who understands your company and your staffing needs.'

      },
      {
        one: 'We have the strongest guarantees in the industry.',
        arr: [
          '\u2713 6-month guarantee on perm placements',
          '\u2713 1 week guarantee on contract placements'
        ]

      },
      {
        one: 'We strive to create a long-term relationship by serving as your staffing consultant.',
        arr: [
          '\u2713 We can help define your staffing needs',
          '\u2713 We can help write your job specifications / job descriptions',
          '\u2713 We can help you decide on optimal salary ranges to attract the best talent while staying within budget'
        ]
      },
    ]
  }


function page() {
  return (
    <div className='pt-[6rem]'>
      <TiltleSection tiltle={'what sets us apart ?'}/>
      <ContentNumber data={empeloyer}/>
    </div>
  )
}

export default page
