import { FaScrewdriverWrench } from "react-icons/fa6";
import Skill from "./Skill";

function Skills({ skills }) {

    return (
        skills &&
        <div className="resume-block">
            <div className="text-4xl font-bold mb-4 flex">
                <span className="mr-4"> <FaScrewdriverWrench /> </span>
                <span>Compétences</span>
            </div>

            {skills.map((section, index) => {
                return (
                    <div className="mb-8">
                        <div className="skill-section-name">{section.name}</div>
                        {
                            section.skills.map((skill, index) => {
                                return (<Skill name={skill.name} level={skill.level} key={index + 1} />)
                            })
                        }
                    </div>
                )
            })
            }

        </div>
    );

}

export default Skills;