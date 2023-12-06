
import WeatherNavigation from "./WeatherNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../users/signin";
import Signup from "../users/signup";
import Account from "../users/account";
import UserTable from "../users/table";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const URL = "http://localhost:4000/api/courses";

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return response.data;
                } else {
                    return c;
                }
            })
        );
        setCourse({ name: "" });
    };
    const deleteCourse = async (course_id) => {
        const response = await axios.delete(
            `${URL}/${course_id}`
        );
        setCourses(courses.filter((c) => c._id !== course_id));
    };
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses(currentCourses => [response.data, ...currentCourses]);
        setCourse({ name: "" });
    };
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    return (
        <Provider store={store}>
            <div className="d-flex">
                <WeatherNavigation />
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="home" />} />
                        <Route path="home" element={
                            <Home
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={(course_id) => deleteCourse(course_id)}
                                updateCourse={updateCourse}/>
                        } />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
                        <Route path="Profile" element={<h1>Profile</h1>} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/admin/users" element={<UserTable />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );

}
export default Kanbas