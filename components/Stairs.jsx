"use client";

import { animate, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%']
    }
}

const reverseIndex = (index) => {
    const totalSteps = 7;
    return totalSteps - index - 1;
};

const Stairs = () => {
    const pathname = usePathname();
    return (
        <>
            {/* render 6 divs similar to a stair case */}
            {[...Array(7)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut',
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className='h-full w-full bg-destructive relative'
                    />);
            })}

        </>
    )
}

export default Stairs;
