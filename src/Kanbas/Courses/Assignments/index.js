import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {FaCaretDown, FaEllipsisV, FaPlus, FaGripVertical, FaCheckCircle, FaPenSquare} from "react-icons/fa";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="assignments">
            <div>
                <input type="text" className="form-control w-50" id="search-for-assignment" placeholder="Search for Assignment"></input>
                <button className="btn btn-secondary float-end"><FaEllipsisV/></button>
                <button className="btn btn-danger float-end">
                    <FaPlus/>
                    Assignment
                </button>
                <button className="btn btn-secondary float-end">
                    <FaPlus/>
                    Group
                </button>
                <br/>
                <hr/>
            </div>

            <div className="list-group">
                <li className="list-group-item-secondary">
                    <FaGripVertical/>
                    <FaCaretDown/>
                    <FaEllipsisV className="float-end"/>
                    <FaPlus className="float-end"/>
                    <button className="btn btn-secondary float-end rounded-pill">40% of Total</button>
                    <div>
                        <h5>ASSIGNMENTS</h5>
                    </div>
                </li>

                {courseAssignments.map((assignment) => (
                    <div className="list-group-item">
                        <FaGripVertical/>
                        <FaPenSquare className="green"/>
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                            {assignment.title}
                        </Link>
                        <FaEllipsisV className="float-end"/>
                        <FaCheckCircle className="float-end green"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Assignments;