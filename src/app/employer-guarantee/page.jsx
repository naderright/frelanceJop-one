import TiltleSection from '@/components/TitleSection'
import ContentPage from '@/pages/pagesContent/ContentPage'
import React from 'react'
const empeloyer = {
    leftContent: {
        note: true,
        title: 'Six-Month Guarantee on Permanent Placements',
        paragraf: `Applies only to non-exempt positions, such as drafters, technicians, and electronic assemblers.
Does not apply to exempt positions, such as engineers, as these roles require more than a week to assess competency. Full details are outlined in the staffing agreement.
The guarantee does not cover employees sourced directly by the client company.`

    },

    rightContent: [
        {
            one: 'Initial 90-Day Guarantee',
            tow: 'If an employee leaves within the first 90 days due to poor performance or voluntary resignation, we will work to find a replacement within 60 days.',
            three: 'If a replacement that is acceptable to the client is not found within 60 days, the initial placement fee will be refunded in full.'

        },
        {
            one: 'Additional 90-Day Guarantee',
            tow: 'If an employee voluntarily leaves between days 91 and 180, we will again attempt to find a replacement within 60 days.',
            three: 'If a replacement that is acceptable to the client is not found within 60 days, the initial placement fee will be refunded in full.'

        },
        {
            one: 'One-Week Guarantee on Contract Placements (Non-Exempt Roles)',
            tow: 'If a non-exempt contract employee is terminated within the first week (up to 40 hours) due to poor performance, you will not be billed for their hours worked.'

        },

    ]
}


function page() {
    return (
        <div className='pb-[2rem]'>

            <div className="bgTitle ">
                <TiltleSection tiltle={'Employer Guarantee'} />
                <div className="bg-white clipPath ">
                    <div className="di w-full h-screen">
                    <ContentPage data={empeloyer} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
