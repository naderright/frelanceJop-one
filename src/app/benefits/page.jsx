'use client'
import TiltleSection from '@/components/TitleSection'
import ContentPara from '@/pages/pagesParagraf/ContentPara'
import React, { useState } from 'react'

const empeloyer = {
    'PTO & Holiday Pay': {
        leftContent: {
            note: false,
            title: 'Engineering Resource Group pays employees weekly.',
            paragraf: 'As a W-2 contract employee, you are eligible for holiday pay and paid time off (PTO).'
        },

        rightContent: [
            {
                one: 'Holiday Pay*',
                tow: [
                    '\u2713 After completing 500 hours of work (usually 3 months), you will be paid for the following 7 holidays: New Year’s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, Day after Thanksgiving, Christmas. ',
                    '\u2713 If you worked for us for at least 500 hours within the past 12 months, we waive the waiting period.',
                ]

            },
            {
                one: 'Paid Time Off (PTO)**',
                tow: [
                    '\u2713 Employee will accrue one (1) hour of PTO for every 30 hours worked, up to 40 hours per year. Eligible to use accrued PTO 120 days after start of employment.',

                ]

            },
            {
                one: 'Note:',
                tow: [
                    'The above are our standard holiday and PTO pay benefits. There are certain exceptions and differences with several client companies, which will be indicated in your offer letter.',
                    '* Eligible for 7 days (56 hours) of holiday pay per year, after completing 500 hours of work. To qualify for holiday pay, you must work all other days of the affected holiday week or use PTO for days not worked, and average at least 36 hours of work or paid vacation time per week in the previous 4 weeks.',
                    '* *Applies to employees working in New Jersey. For all other states, please refer to your offer letter.'
                ]
            }

        ]
    },
    'Health & Dental Insurance': {
        leftContent: {
            note: false,
            title: 'ERG offers health insurance through Aetna, dental insurance through Guardian, and we also offer vision insurance. We are committed to offering a comprehensive benefits package to our contract employees and, as part of that, we make substantial contributions toward health insurance premiums.',
            paragraf: 'For example, ERG will contribute up to 75% of the cost of your health insurance premiums for the Aetna 6350 plan, EMPLOYEE ONLY, and the same dollar amount (that we contribute to the “employee only” premium) toward reducing the premium costs for Employee + Spouse, Employee + Children, and Employee + Family.',
            paragraf2: 'Premiums are paid through payroll deductions and are paid with pre-tax dollars.'
        },

        rightContent: [
            {
                one: 'The three medical insurance plans offered are:',
                

            },
            {
                one: 'The two dental insurance plans offered are:',

               

            },
            {
                one: 'The vision insurance plan offered is:',
               

            },
           


        ]
    },
    '401(k) Plan': {
        leftContent: {
            note: false,
            title: 'We offer one of the most generous plans in contract staffing industry!',
            paragraf: 'If you are short staffed, but need to complete a project, consider hiring an engineer, designer/drafter or engineering technician on a contract basis.'
        },

        rightContent: [
            {
                one: '401k Plan Highlights',
                tow: [
                    '\u2713 We offer traditional 401(k) and Roth 401(k) plans.',
                    '\u2713 You are eligible for our 401(k) plan three (3) months after your start date.',
                    '\u2713 Engineering Resource Group will match 50% of your first 8% contribution, up to a maximum company contribution of $1,000 per calendar year.',
                    '\u2713 The company matching portion is vested after only one (1) year of employment. (The one year if from your start date, not your eligibility date.)',
                    '\u2713 If you are over the age of 65, the company matching portion is vested immediately.',
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
