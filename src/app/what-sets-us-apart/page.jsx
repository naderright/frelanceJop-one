import TiltleSection from '@/components/TitleSection'
import ContentNumber from '@/pages/pagesNumber/ContentNumber'
import React from 'react'
const empeloyer = {
    leftContent: {
      title: 'How Does This Benefit You?',
      paragraf: 'We believe we offer superior staffing and recruiting service for our candidates for the following reasons:'
    },
  
    rightContent:  [
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
            '\u2713 Over the past 33 years we have placed over 5,700 candidates in engineering-related jobs. It is our goal that each and every person we place gives a positive referral about us to their colleagues.'
          ]
  
        },
      ]
    }
function page() {
  return (
    <div className='py-[2rem]'>
         <TiltleSection tiltle={'What Sets Us Apart?'}/>
         <ContentNumber data={empeloyer}/>
    </div>
  )
}

export default page
