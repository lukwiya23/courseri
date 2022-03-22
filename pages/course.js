import { CourseHero, KeyPoints, Curriculum, modal, Navbar, Footer } from "@components/index";


export default function Course() {


    return (
        <div className="relative max-w-7xl mx-auto px-4">
            <Navbar/>
            
            <div className="py-7 mt-7">
            <CourseHero />
            </div>



            <KeyPoints />
            <Curriculum />
            <modal />
            <Footer/>
        </div>
    )
}