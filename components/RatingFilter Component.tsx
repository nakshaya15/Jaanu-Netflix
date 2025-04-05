import React, {useState} from "react";
type Props={
    rating:string;
    setRatingFilter:(rating:string)=>void;
}

const RatingFilter: React.FC<Props>=({rating,setRatingFilter})=>{
    const ratings=["Flop","Average","Hit","Super Hit","Blockbuster"];

    return(
        <div>
            <h4>Filter By Rating</h4>
            {ratings.map((rate)=>(
                <label key = {rate} style={{marginRight:"10px"}}>
                    <input
                    type="radio"
                    value={rate}
                    checked= {rating === rate}
                    onChange={(e) => setRatingFilter(e.target.value)}
                    
                    />
                     {rate}
                </label>
            ))};
        </div>
    );
};

export default RatingFilter;