import Link from "next/link"

const Navbar = () => {
    return (
        <section>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative" aria-label="Global">
                    <div className="flex justify-between">
                        <div>
                            <Link href="/">  
                            <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Home</a>
                            </Link>
                            <Link href="/">  
                            <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Courses</a>
                            </Link>

                        </div>
                        <div>
                            <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Register</a>
                            <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Login</a>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar