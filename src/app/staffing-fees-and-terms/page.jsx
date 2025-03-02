import TiltleSection from '@/components/TitleSection'
import ContentPage from '@/pages/pagesContent/ContentPage'
import React from 'react'
const empeloyer = {
  leftContent: {
    note: true,
    title: 'Terms for Permanent and Temp-to-Perm Placements',
    paragraf: 'The terms below represent our standard policies. If your company has a customized staffing agreement with us, those terms will take precedence.'
  },

  rightContent: [
    {
      one: 'Recruitment Fees for Permanent Placements',
      tow: `Our recruitment fee is 20% of the employee’s starting annual salary (excluding bonuses).
Payment is due within 30 days of the employee’s start date.
`

    },
    {
      one: 'Fee Structure for Temp-to-Perm Conversions',
      tow: `No conversion fee if the employee has worked as our contractor for 12 months or more before transitioning to a permanent role.
If the transition occurs before 12 months, a conversion fee applies:
20% of the starting annual salary, minus a pro-rated credit for the time worked as a contractor.
Example: If the employee has worked as a contractor for 6 months before conversion, the fee is 10% (half of 20%) of the starting annual salary.
`

    },


  ]
}

function page() {
  return (
    <div className='pb-[2rem]'>
      <div className="bgTitle ">
        <TiltleSection tiltle={'Staffing Fees And Terms'} />
        <div className="bg-white clipPath">
          <ContentPage data={empeloyer} />
        </div>
      </div>
    </div>
  )
}

export default page
