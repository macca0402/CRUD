import {Link} from "react-router-dom";

function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>

                    <li>
                        <Link to="/update">Update</Link>
                    </li>

                    <li>
                        <Link to="/">List</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Layout;