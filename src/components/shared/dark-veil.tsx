
'use client';
import { useEffect, useRef } from 'react';

export const DarkVeil = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let angle = 0;
    let animationFrameId: number;

    const draw = () => {
        angle += 0.001;
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        const rootStyle = getComputedStyle(document.documentElement);
        ctx.fillStyle = rootStyle.getPropertyValue('--background').trim();
        ctx.fillRect(0, 0, width, height);

        const primaryColor = rootStyle.getPropertyValue('--primary').trim();

        for (let i = 0; i < 50; i++) {
            const x = width / 2 + Math.sin(angle + i * 0.1) * (width / 4 + i * 5);
            const y = height / 2 + Math.cos(angle + i * 0.1) * (height / 4 + i * 5);
            const radius = Math.abs(Math.sin(angle + i * 0.2)) * 3 + 1;
            
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2);
            gradient.addColorStop(0, `hsla(${primaryColor} / 0.5)`);
            gradient.addColorStop(1, `hsla(${primaryColor} / 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
            ctx.fill();
        }
        animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    draw();

    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};
