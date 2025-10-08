import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";


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
                    <div className="gri">
                        <img src="/assets/comp1.png" alt="Google" className="h-28" />
                        <img src="/assets/comp2.png" alt="Apple" className="h-28" />
                        <img src="/assets/comp3.png" alt="Microsoft" className="h-28" />
                        <img src="/assets/comp4.png" alt="Amazon" className="h-28" />
                        <img src="/assets/comp5.png" alt="Facebook" className="h-28" />
                        <img src="/assets/comp6.png" alt="Netflix" className="h-28" />
                        <img src="/assets/comp7.png" alt="Tesla" className="h-28" />
                        <img src="/assets/comp8.png" alt="Nike" className="h-28" />
                        <img src="/assets/comp9.png" alt="Nike" className="h-28" />
                        <img src="/assets/comp10.png" alt="Nike" className="h-28" />
                        <img src="/assets/comp11.png" alt="Nike" className="h-28" />
                        <img src="/assets/comp12.png" alt="Nike" className="h-28" />
                        <img src="/assets/comp13.png" alt="Nike" className="h-28" />
                        <img src="/assets/comp14.png" alt="Nike" className="h-28" />
                        <img src="/assets/comp15.png" alt="Nike" className="h-28" />
                        <img src="/assets/comp16.png" alt="Nike" className="h-28" />
                    </div>
            </div>
        </section>
    );
};

export default WorkedWith;
