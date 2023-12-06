import { Link, useLocation } from "react-router-dom";
import { FaBook, FaInbox, FaRegClock, FaDesktop, FaRegQuestionCircle, FaCloudSunRain} from "react-icons/fa";
import {FaArrowRightFromBracket, FaMagnifyingGlass} from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./weather_navigation.css";
function WeatherNavigation() {
    const links = ["Home", "Search", "Profile", "Login", "Register"];
    const linkToIconMap = {
        Profile: <BiUserCircle className="weather_navigation_icon" />,
        Home: <FaCloudSunRain className="weather_navigation_icon" />,
        Search: <FaMagnifyingGlass className="weather_navigation_icon" />,
        Login: <FaArrowRightFromBracket className="weather_navigation_icon" />,
        Register: <FaBook className="weather_navigation_icon"/>,
    };
    const { pathname } = useLocation();
    return (
        <div className="list-group weather_navigation">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item weather_navigation_item ${pathname.includes(link) && "active"}`}>
                    {linkToIconMap[link]}
                    <br/>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default WeatherNavigation;