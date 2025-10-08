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
                <Marquee gradient={false} speed={60}>
                    <div className="flex gap-10 items-center">
                        <img src="/assets/comp1.png" alt="BETHEL Community Outreach" className="h-28" />
                        <img src="/assets/comp2.png" alt="Women's Haven GUYANA" className="h-28" />
                        <img src="/assets/comp3.png" alt="EIGOR TRADING" className="h-28" />
                        <img src="/assets/comp4.png" alt="KTS FRESH FARM" className="h-28" />
                        <img src="/assets/comp5.png" alt="MY LETTERS (ML)" className="h-28" />
                        <img src="/assets/comp6.png" alt="NSI" className="h-28" />
                        <img src="/assets/comp7.png" alt="LNC (Unclear Text)" className="h-28" />
                        <img src="/assets/comp8.png" alt="AMBER ACADEMY" className="h-28" />
                        <img src="/assets/comp9.png" alt="Roundbright" className="h-28" />
                        <img src="/assets/comp10.png" alt="NSI" className="h-28" />
                        <img src="/assets/comp11.png" alt="PERFECO" className="h-28" />
                        <img src="/assets/comp12.png" alt="TRIPEL (or similar text)" className="h-28" />
                        <img src="/assets/comp13.png" alt="ACE CLUB & LOUNGE" className="h-28" />
                        <img src="/assets/comp14.png" alt="Unidentified Circular Logo" className="h-28" />
                        <img src="/assets/comp15.png" alt="Unidentified Gear Logo" className="h-28" />
                        <img src="/assets/comp16.png" alt="Unidentified Logo (Bottom Right)" className="h-28" />
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default WorkedWith;
