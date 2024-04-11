import {Outlet, Link} from "react-router-dom";

const Layout= () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to= '/' >Home</Link>
                </li>
                <li>
                    <Link to= 'products' >Products</Link>
                </li>
                <li>
                    <Link to= 'dashboard' >Dashboard</Link>
                </li>
            </ul>
        </nav>
               <hr />
            <Outlet />
        </div>
}
//ejecutamos con un export
export default Layout;