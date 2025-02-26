import TiltleSection from '@/components/TitleSection'
import ContentPage from '@/pages/pagesContent/ContentPage'
import React from 'react'
const empeloyer = {
    leftContent: {
        note: true,
        title: 'Six Month Guarantee on Permanent Placements',
        paragraf: 'Applies only to non-exempt professions, such as drafters, technicians and electronic assemblers. Does NOT apply to exempt professions, such as engineers, which take longer than a week to establish competency. Details spelled out in staffing agreement.'
    },

    rightContent: [
        {
            one: 'Initial 90 Day Guarantee',
            tow: 'If the employee departs due to either poor performance or of their own volition during the first 90 days, we will try to find a replacement within 60 days. If a replacement that is acceptable to the client is not found within 60 days, the initial placement fee will be refunded in full.'

        },
        {
            one: 'Additional 90 Day Guarantee',
            tow: 'If the employee leaves of their own volition from 91st day to 180th day, we will try to find a replacement within 60 days. If a replacement that is acceptable to the client is not found within 60 days, the initial placement fee will be refunded in full.'

        },
        {
            one: 'One Week Guarantee on Contract Jobs (for non-exempt professions)',
            tow: 'One (1) week guarantee policy on our non-exempt contract employees: If you terminate our contract employee during the first week (up to 40 hours) of work due to poor performance, we will not bill you for those hours of work.'

        },

    ]
}


function page() {
    return (
        <div className='py-[6rem]'>
            <TiltleSection tiltle={'Employer Guarantee'} />
            <ContentPage data={empeloyer}/>
        </div>
    )
}

export default page
