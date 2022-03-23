import { CourseHero, KeyPoints, Curriculum, modal, Navbar, Footer } from "@components/index";
import { getAllCourses } from "@content/fetcher";


export default function Course({course}) {


    return (
        <div className="relative max-w-7xl mx-auto px-4">
            <Navbar/>
            
            <div className="py-7 mt-7">
            <CourseHero
            title={course.title}
            description={course.description}
            image={course.coverImage}
            />
            </div>



            <KeyPoints />
            <Curriculum />
            <modal />
            <Footer/>
        </div>
    )
}

export function getStaticPaths(){
    const {data} = getAllCourses()

    return {
        paths: data.map(c=>({
            params:{
                slug:c.slug
            }
        })),
        fallback:false
    }
}

export function getStaticProps(){
    const {data} = getAllCourses()
    const course = data.filter(c=> c.slug=== params.slug)[0]
    return{
        props:{
            course
        }
    }
}