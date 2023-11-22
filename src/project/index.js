import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
function Project() {
    return (
        <div className="row">
            <div className="col-2">
                <Nav />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;