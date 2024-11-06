import { FaScrewdriverWrench } from "react-icons/fa6";
import Skill from "./Skill";

function Skills({ skills, sectionTitle, icon }) {

    return (
        skills &&
        <div className="resume-block ">
            <div className="resume-block-title">
                <span className="mr-4"> {icon} </span>
                <span>{sectionTitle}</span>
            </div>

            {skills.map((section, index) => {
                return (
                    <div className="mb-8">
                        <div className="skill-section-name">{section.name}</div>
                        {
                            section.skills.map((skill, index) => {
                                return (<Skill name={skill.name} level={skill.level} certificationExpiryDate={skill.certificationExpiryDate} key={index + 1} />)
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