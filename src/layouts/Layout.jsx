import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/footer";
const Layout = () => {
    return (
        <>
            <header className="border-b pb-4"> 
                <nav className="flex items-center justify-between">
                    <h1 className="text-indigo-600 font-bold">MyBlog </h1>
                    <div>
                        <Link
                            className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white"
                            to="/">
                            Home
                        </Link>
                        {/* <Link
                             className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white"
                             to="">
                            My Blogs
                        </Link> */}
                        <Link
                             className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white"
                             to="/create">
                            Posts
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="py-8 py-12"> 
                <Outlet/>
            </main>

             {/* Footer is added here, it will appear on all pages */}
             <Footer />
        </>
    )

}

export default Layout;