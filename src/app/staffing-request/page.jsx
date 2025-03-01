import JobApplicationForm from '@/components/SubmitForm'
import TiltleSection from '@/components/TitleSection'
import { Phone } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <div>
            <div className="bg-sky-600 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px] min-h-screen ">
                <TiltleSection tiltle={'Submit a Staffing or Recruiting Request'} />
                <div className="bg-white clipPath  ">
                    {/* .///// */}

                    <div className='grid grid-cols-1 md:grid-cols-2 px-6 py-[4rem] gap-[5rem] container mx-auto h-full '>
                        <div className="left px-[2rem] mx-auto bg-gray-100 flex flex-col    p-4 ">
                            <h3 className='text-[1.2rem] font-medium py-5'>
                                Please use this form to tell us about your staffing or recruiting needs. We will contact you
                                within minutes to acknowledge your request and to discuss your specific needs in more detail.
                            </h3>
                            <p className='text-[1.1rem] font-bold'>For immediate attention, please call us and ask for an account executive.</p>
                            <p className='font-bold flex gap-2 py-3'><Phone />(917)-277-3611</p>
                        </div>
                        <div className='right  '>
                            <JobApplicationForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
