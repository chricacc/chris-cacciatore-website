function Skill({ skill }) {
    return (
        <div className="flex flex-col w-24 mt-4 mr-4 sm:mt-8 sm:mr-8 shadow-3xl p-4 rounded-lg">
            <img src={skill.imgUrl} className="h-16 w-16" />
            <h1 className="text-center mt-2">{skill.name}</h1>
        </div>
    );
}

export default Skill;