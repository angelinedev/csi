
'use client';
import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

const TiltedCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useSpring(0, { stiffness: 400, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 50 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`
    radial-gradient(
      240px at ${mouseX}px ${mouseY}px,
      white,
      transparent
    )
  `;

  const style = {
    maskImage,
    WebkitMaskImage: maskImage,
  };

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative w-[300px] h-[400px] rounded-2xl border border-white/10 bg-card p-4 text-card-foreground duration-500 hover:border-white/30"
    >
      <div className="absolute inset-1 rounded-xl bg-card-foreground/5" />
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100"
        style={style}
      >
        <div className="absolute inset-0 bg-[radial-gradient(at_center,transparent,black)]" />
      </motion.div>
      <div className="relative h-full w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default TiltedCard;
