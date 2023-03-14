import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

 function Go2() {
    return (
        <motion.article
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
            <motion.h1
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible
                }}
                className="text-black"
            >
                Galleries
            </motion.h1>
            <ul>
                <motion.li variants={itemVariants}>
                  Amsterdam Zuid nightwalk
                </motion.li>
                <motion.li variants={itemVariants}>
                   White lines of Canary Wharf
                </motion.li>
            </ul>
        </motion.article>
    );
}
export default Go2
