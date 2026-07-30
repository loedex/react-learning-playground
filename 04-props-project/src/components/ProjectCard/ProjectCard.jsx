import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({
    title,
    category,
    isCompleted,
    difficulty,
    hasCertificate,
}) => {
    
    const badgeColor = (()=>{
        if(difficulty === "Beginner"){
            return "green";
        }else if(difficulty === "Intermediate"){
            return "orange";
        }else{
            return "red";
        }
    })();

    const completeStatus = isCompleted ? "Completed" : "In Progress";

    return (
        
        <div className="parent">
            <p id="title"><span>Project Name :</span> {title}</p>
            <p id="category">Category : {category}</p>
            <p id="status">Status : {completeStatus}</p>
            <p id="difficulty" style={{ backgroundColor: badgeColor }}>Difficulty : {difficulty}</p>
            {hasCertificate && <p id="certificate">Certificate Availabale</p>}
        </div>
    );
};

export default ProjectCard;
