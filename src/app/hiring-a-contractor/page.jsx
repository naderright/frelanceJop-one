import TiltleSection from '@/components/TitleSection'
import ContentPara from '@/pages/pagesParagraf/ContentPara'
import React from 'react'

const empeloyer = {
    leftContent: {
        note: false,
        title: 'Consider Hiring On A Contract / Temporary Basis',
        paragraf: 'If you are short staffed, but need to complete a project, consider hiring an engineer, designer/drafter or engineering technician on a contract basis.',
        contact:'(917) 277 3611'
    },

    rightContent: [
        {
            one: 'Advantages of Contract/Temporary Staffing:',
            tow: [
                '\u2713 Flexible Budgeting: Even if your company has a hiring freeze, you may still be able to hire using your project’s budget.',
                '\u2713 No Long-Term Commitment: Contractors work as employees at will, meaning there’s no penalty if your project ends earlier than expected.',
                '\u2713 Fast Hiring Process: Since you control the hiring decision, you can bring talent on board quickly.',
                '\u2713 Seamless Transition to Full-Time: Once the hiring freeze is lifted, you can convert the contractor to a direct employee under fair and reasonable terms.',
            ]

        },
        {
            one: 'Why Choose Engineering Resource Group?',
            tow: [
                "\u2713 Specialized Expertise: We've focused on contract engineering staffing since 1991.",
                '\u2713 Engineering Professionals: All of our account executives and recruiters are degreed engineers, ensuring a deep understanding of your technical needs.',
                '\u2713 Risk-Free Hiring: Our one-week guarantee on contract employees minimizes your risk.',
                '\u2713Industry-Leading Benefits: We offer the best contract employee benefits, ensuring stability so your contractor stays until your project is complete.',
                
            ]

        },
       

    ]
}

function page() {
  return (
    <div className='py-[2rem]'>
      <TiltleSection tiltle={'Consider Hiring on a Temp Basis'}/>
      <ContentPara data={empeloyer}/>
    </div>
  )
}

export default page
