import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import {FaPenSquare} from "react-icons/fa";
function Dashboard() {
    const courses = db.courses;
    return (
        <div className="main-content">
            <div>
                <h1>Dashboard</h1>
                <hr/>
                <h2>Published Courses (3)</h2>
                <hr/>
            </div>

            <div className="d-flex flex-row flex-wrap card-content">
                {courses.map((course) => (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                            <div className="card">
                                <img src="/kanbas/assets/NU_RGB_Notched-N_motto_RW.png"
                                     className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">
                                        {course.number}<br/>
                                        Fall 2023 Semester Full Term</p>
                                    <FaPenSquare/>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default Dashboard;