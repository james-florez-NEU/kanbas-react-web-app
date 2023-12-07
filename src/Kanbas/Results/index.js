import React from 'react';
import {useParams} from "react-router-dom";

function Results() {
    const {search} = useParams();
    return (
        <div>
            <h1>Results</h1>
            <h2>{search}</h2>
        </div>
    );
}
export default Results;