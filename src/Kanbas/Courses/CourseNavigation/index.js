import { Link, useParams, useLocation } from "react-router-dom";
import "./course_navigation.css";


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Conferences", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group course_navigation">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}


export default CourseNavigation;