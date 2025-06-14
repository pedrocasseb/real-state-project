import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-gray-800 text-white py-6'>
                <div className='container mx-auto text-center'>
                    <p className='text-sm'>© {new Date().getFullYear()} Real State. All rights reserved.</p>
                    <p className='text-xs mt-2'>Designed by GreatStack</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer