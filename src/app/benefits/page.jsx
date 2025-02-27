'use client'
import TiltleSection from '@/components/TitleSection'
import ContentPara from '@/pages/pagesParagraf/ContentPara'
import React, { useState } from 'react'

const empeloyer = {
    'PTO & Holiday Pay': {
        leftContent: {
            note: false,
            title: 'Weekly Pay & Employee Benefits',
            paragraf: 'At Engineering Resource Group, we ensure our employees are paid weekly and offer holiday pay and paid time off (PTO) to our W-2 contract employees.'
        },

        rightContent: [
            {
                one: 'Holiday Pay*',
                
                tow: [
                    'After completing 500 hours of work (approximately 3 months), you’ll be eligible for 7 paid holidays:',
                    '\u2713 New Year’s Day ',
                    '\u2713 Memorial Day',
                    '\u2713 Independence Day',
                    '\u2713 Labor Day',
                    '\u2713 Thanksgiving',
                    '\u2713 Day after Thanksgiving',
                    '\u2713 Christmas',
                    '\u2713 If you’ve worked 500 hours in the past 12 months, the waiting period is waived.',
                
                ]

            },
            {
                one: 'Paid Time Off (PTO)**',
                tow: [
                    'You’ll accrue 1 hour of PTO for every 30 hours worked, up to 40 hours per year.',
                    'PTO can be used after 120 days of employment.',
                    'Important Notes:',
                    '\u2713 These are our standard holiday and PTO benefits. Some client companies may have different policies, which will be detailed in your offer letter.',
                    '\u2713 To qualify for holiday pay, you must:',
                    'Work all other days in the affected holiday week or use PTO for days not worked.',
                    'Maintain an average of at least 36 hours per week (including paid vacation) in the previous 4 weeks.',
                    '\u2713 PTO policies apply to New Jersey employees. Employees in other states should refer to their offer letter',

                ]

            },
           
        ]
    },
    'Health & Dental Insurance': {
        leftContent: {
            note: false,
            paragraf: 'Comprehensive Health & Dental Benefits for Contract Employees',
            paragraf2: 'At Engineering Resource Group (ERG), we are committed to providing a robust benefits package for our contract employees. As part of this commitment, we make substantial contributions toward health insurance premiums to help reduce your out-of-pocket costs.'
        },

        rightContent: [
            {
                one: 'Health Insurance (Aetna)',
                tow:[
                    'ERG offers three medical insurance plans through Aetna, with significant employer contributions:',
                    '\u2713 ERG covers up to 75% of the premium for the Aetna 6350 plan (Employee Only)',
                    '\u2713 The same dollar amount is applied toward Employee + Spouse, Employee + Children, and Employee + Family plans to help lower their cost.',
                    '\u2713 Premiums are paid through payroll deductions using pre-tax dollars for added savings.'
                ]
                

            },
          
           


        ]
    },
    '401(k) Plan': {
        leftContent: {
            note: false,
            title: 'One of the Most Generous 401(k) Plans in the Contract Staffing Industry!',
            paragraf: 'At Engineering Resource Group (ERG), we offer a competitive 401(k) plan to help you save for the future.'
        },

        rightContent: [
            {
                one: '401k Plan Highlights',
                tow: [
                    '\u2713 Traditional & Roth 401(k) Options – Choose the plan that best fits your retirement goals.',
                    '\u2713 Eligibility: You can enroll after just 3 months of employment.',
                    '\u2713 Company Match: ERG matches 50% of your first 8% contribution, up to $1,000 per calendar year.',
                    '\u2713 Fast Vesting:',
                    'The company match is fully vested after just 1 year of employment. (This is based on your start date, not your eligibility date.)',
                    'If you’re 65 or older, your company match is vested immediately.'
                ]

            },
          


        ]
    }
}


function page() {
    const [type, setType] = useState('PTO & Holiday Pay')

    const changType = (name) => {


        setType(name)
    }
    return (
        <div className='py-[6rem]'>
            <TiltleSection tiltle='benefits' />
            <div className="chodees max-w-[30rem] gap-4 mx-auto flex  py-3 mt-3 bg-sky-100 justify-center items-center">
                <h3 onClick={() => changType('PTO & Holiday Pay')} className={`font-bold ${type == 'PTO & Holiday Pay' ? 'text-blue-600' : ''} hover:text-blue-600 transition-all cursor-pointer`}>PTO & Holiday Pay</h3>
                <h3 onClick={() => changType('Health & Dental Insurance')} className={`font-bold ${type == 'Health & Dental Insurance' ? 'text-blue-600' : ''} hover:text-blue-600 transition-all cursor-pointer`}>Health & Dental Insurance</h3>
                <h3 onClick={() => changType('401(k) Plan')} className={`font-bold ${type == '401(k) Plan' ? 'text-blue-600' : ''} hover:text-blue-600 transition-all cursor-pointer`}>401(k) Plan</h3>
            </div>
            <ContentPara data={empeloyer[type]} />
        </div>
    )
}

export default page
