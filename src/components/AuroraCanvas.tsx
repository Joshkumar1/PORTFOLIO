import React, { useEffect, useRef } from 'react';

interface AuroraCanvasProps {
  themeAccent?: string;
}

export const AuroraCanvas: React.FC<AuroraCanvasProps> = ({ themeAccent = 'cyan' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle network setup
    const particlesCount = Math.min(Math.floor(width / 22), 65);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing aurora mesh backdrops
      const auroraGradient = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time) * 120,
        height * 0.3 + Math.cos(time * 0.8) * 100,
        10,
        width * 0.3,
        height * 0.3,
        width * 0.5
      );

      if (themeAccent === 'violet') {
        auroraGradient.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
        auroraGradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.08)');
        auroraGradient.addColorStop(1, 'rgba(5, 5, 8, 0)');
      } else if (themeAccent === 'emerald') {
        auroraGradient.addColorStop(0, 'rgba(16, 185, 129, 0.15)');
        auroraGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.08)');
        auroraGradient.addColorStop(1, 'rgba(5, 5, 8, 0)');
      } else if (themeAccent === 'gold') {
        auroraGradient.addColorStop(0, 'rgba(245, 158, 11, 0.15)');
        auroraGradient.addColorStop(0.5, 'rgba(239, 68, 68, 0.08)');
        auroraGradient.addColorStop(1, 'rgba(5, 5, 8, 0)');
      } else {
        // Cyan Aurora (Default)
        auroraGradient.addColorStop(0, 'rgba(6, 182, 212, 0.15)');
        auroraGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.09)');
        auroraGradient.addColorStop(1, 'rgba(5, 5, 8, 0)');
      }

      ctx.fillStyle = auroraGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Cursor glow follow
      const cursorGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
      cursorGlow.addColorStop(0, 'rgba(6, 182, 212, 0.06)');
      cursorGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Draw floating star particles and connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeAccent]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 opacity-90"
    />
  );
};
