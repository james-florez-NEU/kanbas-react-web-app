import { Link, useLocation } from "react-router-dom";
import "./kanbas_navigation.css";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const { pathname } = useLocation();
    return (
        <div className="list-group kanbas_navigation">
            <div>
                <img src="/kanbas/assets/NU_RGB_Notched-N_motto_RW.png" alt={"NEU Logo"}/>
            </div>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item kanbas_navigation_item ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;