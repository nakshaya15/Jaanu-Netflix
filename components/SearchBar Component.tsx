import React, {useState} from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";


const SearchBar: React.FC = () => {
    const [query, setquery] = useState("");
    const dispatch = useDispatch();
    const handleSerach=(e:React.FormEvent)=>{
        e.preventDefault();
        dispatch(fetchMovies());
    };


    return(
        <div>
            <form onSubmit={handleSerach} className="search-Bar">

            <input type="text"
            placeholder="search movies.."
            value={query}
            onChange={(e) => setquery(e.target.value)}/>
            
           <button type ="submit"></button>
           </form>
        </div>
    );
};

export default SearchBar;