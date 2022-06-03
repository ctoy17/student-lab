import React from "react";
import './Student.css';




function Student(props){
    return(
        <div className="Student">
            <h1 className="StudentName">{props.student.name}</h1>
            <p className="StudentBio">{props.student.bio}</p>
            <div>
            {props.student.scores.map((score, index) => (
                <div className="StudentScore" key={index}>
                    <div className="ScoreDate"> <b>Date:</b> {score.date} </div><div className="ScoreAmount"> <b>Score:</b> {score.score} </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Student;