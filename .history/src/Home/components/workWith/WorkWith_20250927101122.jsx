import Marquee from "react-fast-marquee";
// import company1 from "../assets/company1.png";
// import company2 from "../assets/company2.png";
// import company3 from "../assets/company3.png";
// import company4 from "../assets/company4.png";

const WorkedWith = () => {
    return (
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Worked With
            </h2>
            <Marquee gradient={false} speed={50}>
                <div className="flex gap-10">
                    <img src={company1} alt="Company 1" className="h-12" />
                    <img src={company2} alt="Company 2" className="h-12" />
                    <img src={company3} alt="Company 3" className="h-12" />
                    <img src={company4} alt="Company 4" className="h-12" />
                </div>
            </Marquee>
        </section>
    );
};

export default WorkedWith;
