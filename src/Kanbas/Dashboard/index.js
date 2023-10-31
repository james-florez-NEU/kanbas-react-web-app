import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import {FaPenSquare} from "react-icons/fa";
function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {
    return (
        <div className="main-content">
            <div>
                <h1>Dashboard</h1>
                <hr/>
                <h2>Published Courses (3)</h2>
                <hr/>
            </div>

            <div className="mb-3">
                <h5>Course</h5>
                <input value={course.name} className="form-control"
                       onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
                <input value={course.number} className="form-control"
                       onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
                <input value={course.startDate} className="form-control" type="date"
                       onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                <input value={course.endDate} className="form-control" type="date"
                       onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
                <button onClick={addNewCourse} className="btn btn-success float-end">
                    Add
                </button>
                <button onClick={updateCourse} className="btn btn-secondary float-end">
                    Update
                </button>
            </div>

            <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item">
                        <button className="btn btn-danger float-end"
                            onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }}>
                            Delete
                        </button>
                        <button className="btn btn-warning float-end"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                            Edit
                        </button>
                        {course.name}
                    </Link>
                ))}
            </div>


        </div>
    );
}
export default Dashboard;