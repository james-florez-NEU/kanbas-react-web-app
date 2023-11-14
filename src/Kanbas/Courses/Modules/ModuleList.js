import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import * as client from "./client";
import "./index.css";

function ModuleList() {
    const { courseId } = useParams();

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="list-group flex-grow-2">
            <li className="list-group-item">
                <button
                    className="btn btn-success float-end me-2 ms-2"
                    onClick={handleAddModule}>
                    Add
                </button>
                <button
                    className="btn btn-dark float-end"
                    onClick={handleUpdateModule}>
                    Update
                </button>
                <input value={module.name}
                       onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>
                <br/>
                <textarea value={module.description}
                          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>
            </li>
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <button
                                className ="btn btn-success float-end me-2 ms-2"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button
                                className ="btn btn-danger float-end"
                                onClick={() => handleDeleteModule(module._id)}>
                                Delete
                            </button>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                            <p>{module._id}</p>
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;