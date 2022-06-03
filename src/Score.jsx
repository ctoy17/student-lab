import React from "react";

function Score({props}){
    return(
        <div className="ScoreList">
            <h3>Dates</h3>
            {props.date}
            <br/>
            <h3>Scores</h3>
            {props.score}
        </div>
    )
};



export default Score;