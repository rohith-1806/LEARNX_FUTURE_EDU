import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const PARTICLE_COUNT = 25;
const PARTICLE_COLORS = ['#a855f7', '#22d3ee', '#ec4899', '#f97316', '#eab308'];

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const particleRefs = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  
  // High-performance vanilla JS particle pool to avoid React state thrashing
  const particlesData = useRef(
    Array.from({ length: PARTICLE_COUNT }, () => ({ active: false, x: 0, y: 0, life: 0, vx: 0, vy: 0, size: 0, color: '' }))
  );
  const particleIndex = useRef(0);

  useEffect(() => {
    let rafId = null;
    let lastSpawnTime = 0;

    const spawnParticle = (x, y, isBurst = false) => {
      const p = particlesData.current[particleIndex.current];
      p.active = true;
      p.x = x;
      p.y = y;
      p.life = 1.0;
      p.size = Math.random() * 4 + 2; // 2px - 6px
      p.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      
      if (isBurst) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
      } else {
        // Slow drift so the comet trail naturally drops behind the moving cursor
        p.vx = (Math.random() - 0.5) * 0.5;
        p.vy = (Math.random() - 0.5) * 0.5; 
      }
      
      particleIndex.current = (particleIndex.current + 1) % PARTICLE_COUNT;
    };

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      const now = performance.now();
      
      if (now - lastSpawnTime > 20) {
        // Spawn particle at the base/tail of the arrow (approx offset)
        spawnParticle(e.clientX + 8, e.clientY + 12, false); 
        lastSpawnTime = now;
      }
    };

    window.addEventListener("mousemove", move, { passive: true });

    const animate = () => {
      // 1. Arrow instantly tracks exact coordinate
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      // 2. Animate magic particles smoothly
      particlesData.current.forEach((p, i) => {
        const el = particleRefs.current[i];
        if (!el) return;
        
        if (p.active) {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.02; // Smooth comet fade
          
          if (p.life <= 0) {
            p.active = false;
            el.style.opacity = "0";
          } else {
            el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) scale(${p.life})`;
            el.style.opacity = p.life.toString();
            el.style.width = `${p.size}px`;
            el.style.height = `${p.size}px`;
            el.style.background = p.color;
            el.style.boxShadow = `0 0 8px ${p.color}`;
          }
        }
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // Visual hover ONLY (does not touch positions, size, or scale)
    const onEnter = () => {
      cursorRef.current?.classList.add('cursor-hover');
    };
    
    const onLeave = () => {
      cursorRef.current?.classList.remove('cursor-hover');
    };

    const targets = document.querySelectorAll('a, button, [role="button"], input, [class*="card"]');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <div 
          key={i}
          ref={el => particleRefs.current[i] = el}
          className="cursor-particle"
          style={{ opacity: 0 }}
        />
      ))}
      <div ref={cursorRef} className="cursor-arrow-wrapper">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-arrow-svg">
          <defs>
            <linearGradient id="magic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <filter id="glass-shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#7c3aed" floodOpacity="0.4" />
            </filter>
          </defs>
          <path 
            d="M3 3 L12 24 L15 16 L23 13 L3 3Z" 
            fill="url(#magic-gradient)" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinejoin="round"
            filter="url(#glass-shadow)"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;
