import React, {useState} from "react";

const SortDropdown: React.FC = () => {

    const[sortOption, setSortOption] = useState("");

    return(
        <div>
            <h4>Sort By</h4>

            <select name="" onChange={(e) => setSortOption(e.target.value)} value={sortOption} id="">
                <option value="">Select</option>
                <option value="Popularity">Popularity</option>
                <option value="Release-year">Release Year</option>
            </select>
        </div>
    );
};

export default SortDropdown;