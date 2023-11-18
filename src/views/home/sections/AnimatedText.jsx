import { useRef } from "react";
import PropTypes from "prop-types";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "framer-motion";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

ParallaxText.propTypes = {
  children: PropTypes.node.isRequired,
  baseVelocity: PropTypes.number,
};

export default function AnimatedText() {
  return (
    <section className="w-full bg-[#171717] font-semibold font-mono py-24 flex flex-col gap-2 text-[#686868] text-7xl">
      <ParallaxText baseVelocity={-5}>
        Diseño y desarrollo de sitios web y apps
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        Diseño y desarrollo de sitios web y apps
      </ParallaxText>
    </section>
  );
}
