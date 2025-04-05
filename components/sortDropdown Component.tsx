import React, {useState} from "react";
type Props={
    sortOption:string;
    setSortOption:(option:string)=>void;
};

const SortDropdown: React.FC<Props> = ({sortOption,setSortOption})=>{


    return(
        <div>
            <h4>Sort By</h4>

            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="">Select</option>
                <option value="Popularity">Popularity</option>
                <option value="Release-year">Release Year</option>
            </select>
        </div>
    );
};

export default SortDropdown;