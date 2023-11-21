import { motion } from "framer-motion";

const transition = (OgComponent) => {
  const offscreen = {
    opacity: 0,
    y: 0,
};

const onscreen = {
    opacity: 1,
    y: 0,
    transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeInOut",
    },
};
  return function WrappedComponent(props) {
    return (
      <>
        

        <motion.div
            className="card-container"
            initial={offscreen}
            animate={onscreen}
            viewport={{ once: true, amount: 0.1 }}
        >
          <OgComponent {...props} />
        </motion.div>
      </>
    );
  };
};

export default transition;
