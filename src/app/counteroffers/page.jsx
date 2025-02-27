import TiltleSection from '@/components/TitleSection'
import React from 'react'

function page() {
    return (
        <div className='py-[2rem] px-[2rem] '>
            <TiltleSection tiltle='Were You Offered A Counteroffer?' />
            <div className="content mt-5 bg-gray-100 px-[5rem] py-6 flex flex-col gap-9" >
                <p className=' text-gray-600 text-[1rem] md:text-[1.3rem]'>
                    With the post-pandemic labor shortage, many companies are struggling to hire new employees. As a result, some resort to counteroffers to retain staff when they resign. While your employer may present the counteroffer as a sign that they value you, the reality
                    is they’re simply trying to avoid the disruption of losing you—not necessarily investing in your long-term growth.
                </p>
                <div className="list">
                    <p className='text-[1rem] md:text-[1.3rem]'>Before Accepting a Counteroffer, Ask Yourself:</p>
                    <ul className=''>
                        <li>- Why did my company only recognize my value after I resigned?</li>
                        <li>- Where will I be in six months or a year if I choose to stay?</li>
                    </ul>
                </div>
                <div className="list2">
                    <p>Understanding Counteroffers</p>
                    <p className='text-gray-500'>Companies often extend counteroffers for their own convenience, not necessarily for your career advancement. While it may seem like a win in the short term, statistics show that many
                        employees who accept counteroffers end up leaving within a year due to unchanged circumstances.</p>
                </div>
                <div className="list3">
                    <p>Do Your Research & Seek Advice</p>
                    <p className='py-3'>Here are three insightful articles on counteroffers:</p>
                    <ul className='gap-1 flex flex-col'>
                        <li>- LinkedIn (from 2015, still highly relevant)</li>
                        <li>- Forbes</li>
                        <li>- SHRM (Society for Human Resource Management)</li>
                    </ul>
                </div>
                <div className="tak">
                    <p>Talk it through: Discuss your situation with a trusted colleague, mentor, or family member before making a decision.</p>
                </div>
                <p>At the end of the day, your career should be driven by opportunities that align with your long-term growth—not just a reaction to a company’s short-term needs.</p>
            </div>
        </div>
    )
}

export default page
