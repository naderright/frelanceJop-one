import TiltleSection from '@/components/TitleSection'
import ContentPara from '@/pages/pagesParagraf/ContentPara'
import React from 'react'

const empeloyer = {
    leftContent: {
        note: false,
        title: 'Engineering Resource Group has specialized in staffing and recruiting for engineering and engineering support professions.',
    },

    rightContent: [
        {
            one: 'Our staffing and recruiting strength.',
            tow: [
                'Our staffing and recruiting strength is concentrated in New Jersey, New York City metro area including Fairfield County, CT and the Philadelphia metro area.',
                'We specialize in providing local candidates, which includes candidates who are planning to move to this area, but not out-of-state candidates who want to work remotely, etc.',
                'All of our recruiting is done locally out of our Parsippany, NJ office. Unlike some competitors, we do not employ overseas recruiters or sourcers. We would never entrust something as important as your career to an overseas recruiter who has no clue about our local industry.',

            ]

        },
        {
            one: 'What sets us apart from our competitors?',
            tow: [
                '\u2713 All of our account executives have at least 4-year engineering degrees and at least five years of engineering industry experience. This ensures the highest level of competence and professionalism in the staffing industry, delivering the best possible service to both our clients and our candidates.',
                '\u2713 Our recruiters average over 15 years experience with us. This means you’ll be working with a knowledgeable industry professional, not someone who’s just being trained.',
                '\u2713 We provide one of the best benefit packages for our contract employees, including contributing up to 75% of the cost of health insurance, paid holidays, paid time off (PTO) and a 401(k) plan.',
            ]

        },
        {
            one: 'We are family owned and operated since 1991.',
            tow: [
                'This means that we strive to build strong and long-term relationships with both our clients and job seekers.',
                '\u2713 We have placed hundreds of engineers who later became managers and then became our clients.',
                '\u2713 We have placed engineers and engineering support personnel, sometimes 10 or 20 years ago, who contact us again when they need to change companies.',
                `\u2713 Our account executives, recruiters and our support staff all operate under our three core values:
                 1- Kindness
                 2- Honesty
                 3- Experience`,
                
            ]

        },
      
       

    ]
}

function page() {
  return (
    <div className='py-[6rem]'>
      <TiltleSection tiltle='Our Expertise'/>
      <ContentPara data={empeloyer}/>
    </div>
  )
}

export default page
