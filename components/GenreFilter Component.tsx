import React, {useState} from "react";

const genres = ["Action", "Comedy", "Horror", "Sci-fi", "Drama", "Romcom"];

const GenreFilter: React.FC = () => {
    const[selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const toggleGenre = (genre: string) => {
        setSelectedGenres((prev) => 
        prev.includes(genre) ? prev.filter((g) => g! == genre): [...prev, genre]
    );
    };

    return(
        <div>
            <h4>Filter by Genre:</h4>
            {genres.map((genre) => (
                <label key = {genre}>
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