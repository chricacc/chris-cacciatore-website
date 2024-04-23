import Tool from "./Tool";

function Toolbox({ tools }) {
    return (
        tools &&
        <div className="flex flex-wrap">
            {
                tools.map((tool, index) => {
                    return (<Tool tool={tool} key={index + 1} />)
                })
            }
        </div>
    );
}

export default Toolbox;