import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            Assignment Name
            <input value={assignment.title}
                   className="form-control mb-2" />
            <button onClick={handleSave} className="btn btn-danger me-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-secondary float-end">
                Cancel
            </Link>
        </div>
    );
}


export default AssignmentEditor;