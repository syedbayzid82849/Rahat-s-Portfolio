import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import company1 from "../../../../public/assets/comp1.png";
import company2 from "../../../../public/assets/comp2.png";
import company3 from "../../../../public/assets/comp3.png";
import company4 from "../../../../public/assets/comp4.png";
import company5 from "../../../../public/assets/comp5.png";
import company6 from "../../../../public/assets/comp6.png";
import company7 from "../../../../public/assets/comp7.png";
import company8 from "../../../../public/assets/comp8.png";


const WorkedWith = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-green-700 to-green-400">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="mb-16"
                >
                    <h2 className="text-4xl text-center font-bold mb-6">
                        Worked With
                    </h2>
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">

                </h2>
                <Marquee gradient={false} speed={60}>
                    <div className="flex gap-10 items-center">
                        <img src={company} alt="Google" className="h-24" />
                        <img src={company} alt="Apple" className="h-24" />
                        <img src={company} alt="Microsoft" className="h-24" />
                        <img src={company} alt="Amazon" className="h-24" />
                        <img src={company} alt="Facebook" className="h-24" />
                        <img src={company} alt="Netflix" className="h-24" />
                        <img src={company} alt="Tesla" className="h-24" />
                        <img src={company} alt="Nike" className="h-24" />
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default WorkedWith;
