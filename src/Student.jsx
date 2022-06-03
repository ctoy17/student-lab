import React from "react";



function Student(props){
    return(
        <div>
            <h1>{props.student.name}</h1>
            <p>{props.student.bio}</p>
            <ul>
            {props.student.scores.map((score, index) => (
                <div key={index}>
                    <ul> Date: {score.date} Score: {score.score} </ul>
                </div>
            ))}
            </ul>
        </div>
    );
}

export default Student;