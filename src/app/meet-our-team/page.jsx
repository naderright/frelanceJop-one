import TiltleSection from '@/components/TitleSection'
import ContentNumber from '@/pages/pagesNumber/ContentNumber'
import React from 'react'
const empeloyer = {
    leftContent: {
        note: true,
        title: 'All our account executives are degreed engineers.',
        paragraf: 'There are many reasons we are recognized as the most professional and trusted engineering staffing firm in New Jersey. Here are just three that stand out:',
        paragraf2:'Call us today and speak with our management or one of our recruiters.',
        contact:'(973) 490-7000'
    },

    rightContent: [
        {
            one: 'All of our account executives are degreed engineers',
            tow: ' and at least five years of engineering industry experience. This ensures the highest level of competence and professionalism in the staffing industry, delivering the best possible service to both our clients and our candidates.'


        },
        {
            one: 'We work as a team',
            tow: ' Unlike our competitors, our team setup means that we are more concerned with placing you in the right job than being placed with a particular recruiter. You may end up working with three different recruiters on three different job openings.'

        },
        {
            one: 'Average more than 15 years experience',
            tow: 'Our account executives / recruiters average more than 15 years of experience with us. This means you’ll be working with a knowledgeable industry professional, not someone who’s just being trained.'

        },

    ]
}

function page() {
  return (
    <div className='py-[6rem]'>
      <TiltleSection tiltle='Meet Our Team'/>
      <ContentNumber data={empeloyer}/>
    </div>
  )
}

export default page
