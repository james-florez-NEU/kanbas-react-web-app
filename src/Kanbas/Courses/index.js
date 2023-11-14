import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaRegCheckCircle, FaEllipsisV, FaPlus, FaBars, FaGlasses } from "react-icons/fa";
import "./index.css";


function Courses() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <div>
            <div className="header">
                <FaBars className="fa-bars"/>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">{course.number}</a></li>
                        <li className="breadcrumb-item">></li>
                        <li className="breadcrumb-item active" aria-current="page">Modules</li>
                    </ol>
                </nav>
                <button className="btn btn-secondary float-end ms-2">
                    <FaGlasses/> Student View
                </button>
            </div>
            <hr/>

            <div className="flex-container">
                <CourseNavigation/>

                <div className="home-center-screen">
                    <div>
                        <button className="btn btn-secondary float-end"><FaEllipsisV/></button>
                        <button className="btn btn-danger float-end">
                            <FaPlus/>
                            Module
                        </button>
                        <div className="dropdown float-end">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaRegCheckCircle/>
                                Publish All
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button className="btn btn-secondary float-end">View Progress</button>
                        <button className="btn btn-secondary float-end">Collapse All</button>
                        <br/>
                        <hr/>
                    </div>

                    <div className="main-content">
                        <div className="overflow-y-scroll">
                            <Routes>
                                <Route path="/" element={<Navigate to="Home"/>} />
                                <Route path="Home" element={<Home/>} />
                                <Route path="Modules" element={<Modules/>} />
                                <Route path="Assignments" element={<Assignments/>} />
                                <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                                <Route path="Grades" element={<Grades/>} />
                            </Routes>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
export default Courses;