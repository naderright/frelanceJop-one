import TiltleSection from '@/components/TitleSection'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='pb-[2rem]'>
            <TiltleSection tiltle='Contact Us' />
            <div className="container flex flex-col gap-7 max-w-[44rem] mx-auto p-4 bg-gray-100 rounded-lg shadow-md text-center py-[3rem] my-[3rem]">
                <p className="text-lg font-semibold"> Contact with Us</p>
                <p className="text-blue-600 flex justify-center items-center gap-2">
                    <Phone/> <Link  href="tel:9172773611" className="hover:underline">917-277-3611</Link>
                </p>
                <p className="text-green-600 flex justify-center items-center gap-2">
                    <Mail/> <Link href="mailto:info@alisconstructiongroup.com" className="hover:underline">
                        info@alisconstructiongroup.com
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default page
