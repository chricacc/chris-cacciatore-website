function Diploma({ diploma }) {

    return (
        <div className="diploma mt-4">
            <div className="text-xl font-bold">{diploma.title}</div>
            <div className="">{diploma.school} - {diploma.year}</div>
        </div>
    );
}

export default Diploma;