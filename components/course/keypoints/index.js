import React from 'react'

const KeyPoints = ({ points }) => {
    return (
        <section>
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-10">
                    <h1 className='text-bold text-2xl font-mono mb-2'>What you learn</h1>
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                       
                            {points.map((point, index) => 
                                <div key={point} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white hover:bg-indigo-900 transition-all 2s ease-in-out">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        {point}
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyPoints