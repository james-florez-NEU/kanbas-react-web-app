import { Link, useLocation } from "react-router-dom";
import { FaBook, FaInbox, FaRegClock, FaDesktop, FaRegQuestionCircle} from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./kanbas_navigation.css";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linkToIconMap = {
        Account: <BiUserCircle className="kanbas_navigation_icon_user align-content-center" />,
        Dashboard: <RiDashboard3Fill className="kanbas_navigation_icon" />,
        Courses: <FaBook className="kanbas_navigation_icon" />,
        Calendar: <BsFillCalendar2WeekFill className="kanbas_navigation_icon" />,
        Inbox: <FaInbox className="kanbas_navigation_icon" />,
        History: <FaRegClock className="kanbas_navigation_icon" />,
        Studio: <FaDesktop className="kanbas_navigation_icon" />,
        Help: <FaRegQuestionCircle className="kanbas_navigation_icon" />,
        Commons: <FaArrowRightFromBracket className="kanbas_navigation_icon" />,
    };
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
                    {linkToIconMap[link]}
                    <br/>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;