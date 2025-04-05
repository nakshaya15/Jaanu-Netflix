import React from "react";

//const genres = ["Action", "Comedy", "Horror", "Sci-fi", "Drama", "Romcom"];
type Props={
    selectedGenres:string[];
    setGenreFilter:(genres:string[])=>void;
}

const GenreFilter: React.FC<Props> = ({ selectedGenres, setGenreFilter}) => {
    const genres = ["Action","Comedy","Horror","Sci-fi","Drama","Romcom"];

    const toggleGenre = (genre: string) => {
        if(selectedGenres.includes(genre)){
        setGenreFilter(selectedGenres.filter((g)=>g !== genre));
        }
        else{
            setGenreFilter([...selectedGenres,genre]);
        }
    
    };

    return(
        <div>
            <h4>Filter by Genre:</h4>
            {genres.map((genre) => (
                <label key = {genre} style={{marginRight:10}}>
                    <input
                    type = "checkbox"
                    value= {genre}
                    checked={selectedGenres.includes(genre)}
                    onChange={() => toggleGenre(genre)}
                    />
                    {genre}
                </label>
            ))};
        </div>
    );
};

export default GenreFilter;