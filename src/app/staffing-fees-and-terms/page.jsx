import TiltleSection from '@/components/TitleSection'
import ContentPage from '@/pages/pagesContent/ContentPage'
import React from 'react'
const empeloyer = {
    leftContent: {
        note: true,
        title: 'Terms on Permanent and Temp-to-Perm Placements',
        paragraf: 'To the right are our standard terms. Terms specified in a customized staffing agreement with your company, if any, would supersede the above standard terms'
    },

    rightContent: [
        {
            one: 'Recruitment Fees on Permanent Placements',
            tow: 'Our recruitment fee is 25% of the starting annual salary (excluding bonuses), payable net 30 after the employee’s starting date.'

        },
        {
            one: 'Fee Structure on Temporary-to-Permanent Conversion',
            tow: 'There is no fee if the employee has worked for 12 months or more for you as our contractor. Before 12 months, our conversion fee is 25% of the starting annual salary, less a pro-rated credit for the time already worked as a contractor. For example, if the employee worked as a contractor for 6 months and is then converted to a permanent hire, the fee is ½ of 25% (or 12 ½%) of the starting annual salary.'

        },
       

    ]
}

function page() {
  return (
    <div className='py-[6rem]'>
      <TiltleSection tiltle={'Staffing Fees And Terms'}/>
      <ContentPage data={empeloyer}/>
    </div>
  )
}

export default page
