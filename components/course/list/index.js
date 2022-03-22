import React from 'react'
import Image from 'next/image'

const CourseList = ({ courses }) => {
    return (
        <section className="grid grid-cols-2 gap-6 mb-5">
            {courses.map(course =>
                <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:cursor-pointer hover:scale-105 transition-all 2s ease-in-out">
                    <div className="flex h-full ">
                        <div className="flex h-full">
                            <Image className="object-cover hover:scale-110 transition-all 2s ease-in-out" layout='fixed' width="200" height="230"
                                src={course.coverImage}
                                alt={course.title} />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{course.type}</div>
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{course.title}</a>
                            <p className="mt-2 text-gray-500">{course.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CourseList