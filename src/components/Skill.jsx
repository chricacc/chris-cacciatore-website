function Skill({ name, level }) {
    const style = {
        width: level + "%"
    };
    return (
        <div className="mb-3 xl:mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium">{name}</span>
                <span className="text-sm font-medium">{level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 xl:h-2.5">
                <div className="bg-blue-600 h-2 xl:h-2.5 rounded-full" style={style}></div>
            </div>
        </div>
    );
}

export default Skill;