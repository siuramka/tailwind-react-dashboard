import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <aside
        className="bg-white w-64 min-h-screen flex flex-col shadow-lg" >
            <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                <a href="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">DPD LOGISTICS</a>
                <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" >
                </button>
            </div>

            <div className="relative flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
                <nav>
                    <NavLink activeClassName="bg-gray-200" className=" block px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" exact to="/">Home</NavLink>
                    <NavLink activeClassName="bg-gray-200" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/shipments">Shipments</NavLink>
                    <NavLink activeClassName="bg-gray-200" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 hover:bg-gray-200 " to="/contact">Contact</NavLink>
                </nav>
            </div>
    </aside>
    );
};

export default SideBar;
