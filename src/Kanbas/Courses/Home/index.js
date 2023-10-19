import ModuleList from "../Modules/ModuleList";
import {FaCalendar} from "react-icons/fa";
import "./index.css"

function Home() {
    return (
        <div>
            <ModuleList />

            <div className="d-none d-xl-block ps-3">
                <div>
                    <button className="btn btn-secondary">Import Existing Content</button>
                </div>
                <div>
                    <button className="btn btn-secondary">Import From Commons</button>
                </div>
                <div>
                    <button className="btn btn-secondary">Choose Home Page</button>
                </div>
                <div>
                    <button className="btn btn-secondary">View Course Stream</button>
                </div>
                <div>
                    <button className="btn btn-secondary">New Announcement</button>
                </div>
                <div>
                    <button className="btn btn-secondary">New Analytics</button>
                </div>
                <div>
                    <button className="btn btn-secondary">View Course Notification</button>
                </div>

                <h4>To Do</h4><br/><hr/>
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href="#">Grade A1 - ENV + HTML</a><br/>
                        100 points * Sep 18 at 11:59pm
                    </li>
                </ul>

                <h4>Coming Up</h4>
                <a href="#" className="float-end">View Calendar</a>
                <FaCalendar className="float-end"/>
                <br/><hr/>

                <ul className="list-group">
                    <li className="list-group-item">
                        <FaCalendar/>
                        <a href="#">Lecture</a><br/>
                        CS4550.12631.202410<br/>
                        Sep 7 at 11:45am
                    </li>
                    <li className="list-group-item">
                        <FaCalendar/>
                        <a href="#">Lecture</a><br/>
                        CS4550.12631.202410<br/>
                        Sep 11 at 11:45am
                    </li>
                    <li className="list-group-item">
                        <FaCalendar/>
                        <a href="#">CS5610 SP23 Lecture</a><br/>
                        CS5610.12631.202410<br/>
                        Sep 11 at 6pm
                    </li>
                    <li className="list-group-item">
                        <a href="#">12 more in the next week ...</a>
                    </li>
                </ul>
            </div>

        </div>
    );
}
export default Home;