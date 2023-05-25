
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-1/3 mx-auto my-8">
            <p className="text-yellow-600 mb-1">--- {subHeading} ---</p>
            <h2 className="text-3xl font-semibold uppercase border-y-2 py-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;