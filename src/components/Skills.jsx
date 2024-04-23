import Skill from "./Skill";

function Skills({ skills }) {
    return (
        skills &&
        <div className="flex flex-wrap">
            {
                skills.map((skill) => {
                    return (<Skill skill={skill} />)
                })
            }
        </div>
    );
}

export default Skills;