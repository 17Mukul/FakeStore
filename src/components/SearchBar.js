import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { setInputValue } from "../utils/slices/inputSlice";
import { useState, useEffect } from "react";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [localInput, setLocalInput] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setInputValue(localInput));
        }, 800); // 500ms debounce

        return () => clearTimeout(timer);
    }, [localInput, dispatch]);

    return (
        <div className="searchBar">
            <input 
                style={{ background: "#ECECEC" }} 
                className="inputfield" 
                type="text"
                value={localInput}
                onChange={(e) => setLocalInput(e.target.value)} 
            />
        </div>
    );
};

export default SearchBar;
