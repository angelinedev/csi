
'use client';
import { useRef } from "react";
import { motion, useMotionValue, useSpring, type SpringOptions } from "framer-motion";
import Image from 'next/image';

interface TiltedCardProps {
  imageSrc: string;
  altText: string;
  overlayContent?: React.ReactNode;
  rotateAmplitude?: number;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText,
  overlayContent,
  rotateAmplitude = 14,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function handleMouseEnter() {
    scale.set(1.1);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      ref={ref}
      className="relative [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: '400px',
        width: '300px',
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative [transform-style:preserve-3d] w-full h-full"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-card overflow-hidden">
             <Image 
                src={imageSrc}
                alt={altText}
                fill
                className="object-cover"
              />
             {overlayContent}
        </div>
      </motion.div>
    </div>
  );
}
