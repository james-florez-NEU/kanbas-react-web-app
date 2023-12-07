import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const executeSearch = async () => {
        navigate("/kanbas/search/:search");
    }
    return (
        <div>
            <h1>Search</h1>
            <input
                type={"text"}
                placeholder={"Search"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={executeSearch}>Search</button>
        </div>
    );
}
export default Search;