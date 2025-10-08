import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import company1 from "../../../../../../";

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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-12" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-12" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-12" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-12" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="h-12" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-12" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla" className="h-12" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="h-12" />
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default WorkedWith;
