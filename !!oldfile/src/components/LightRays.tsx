import { useEffect, useRef } from 'react';

export default function LightRays() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const animate = () => {
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      ctx.fillStyle = 'rgba(10, 10, 10, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        300
      );

      gradient.addColorStop(0, 'hsla(279, 65%, 32%, 0.4)');
      gradient.addColorStop(0.3, 'hsla(292, 71%, 49%, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        const endX = mouseX + Math.cos(angle) * 500;
        const endY = mouseY + Math.sin(angle) * 500;

        const rayGradient = ctx.createLinearGradient(mouseX, mouseY, endX, endY);
        rayGradient.addColorStop(0, 'hsla(279, 65%, 32%, 0.15)');
        rayGradient.addColorStop(0.5, 'hsla(292, 71%, 49%, 0.05)');
        rayGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.strokeStyle = rayGradient;
        ctx.lineWidth = 40;
        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
