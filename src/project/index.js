import Signin from "../users/signin";
import Account from "../users/account";
import {Routes, Route, Navigate, Link} from "react-router-dom";
import Nav from "../Nav";
function Project() {
    return (
        <div>
        <Nav/>
        <div className="row">
            <div className="col-2">
                <div className="list-group mt-2">
                    <Link to="/project/home" className="nav-link">Home</Link>
                    <Link to="/project/search" className="nav-link">Search</Link>
                    <Link to="/project/signin" className="nav-link">Signin</Link>
                    <Link to="/project/signup" className="nav-link">Signup</Link>
                    <Link to="/project/account" className="nav-link">Account</Link>
                </div>
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
        </div>
        </div>
    );
}
export default Project;