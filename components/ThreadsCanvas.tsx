"use client";

import { useEffect, useRef } from "react";

const LINE_COUNT = 40;
const LINE_COLOR = [115, 179, 13];

interface Line {
  index: number;
  width: number;
  blur: number;
}

function createLines(count: number): Line[] {
  return Array.from({ length: count }, (_, i) => ({
    index: i,
    width: 1.5 + (1 - i / count) * 4,
    blur: 3 + (1 - i / count) * 14,
  }));
}

function noise2D(x: number, y: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);

  function hash(a: number, b: number): number {
    let h = (a * 374761393 + b * 668265263) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h & 0x7fffffff) / 0x7fffffff) * 2 - 1;
  }

  const n00 = hash(ix, iy);
  const n10 = hash(ix + 1, iy);
  const n01 = hash(ix, iy + 1);
  const n11 = hash(ix + 1, iy + 1);

  return (n00 * (1 - ux) + n10 * ux) * (1 - uy) + (n01 * (1 - ux) + n11 * ux) * uy;
}

function fbm(x: number, y: number): number {
  return (
    noise2D(x, y) * 0.5 +
    noise2D(x * 2, y * 2) * 0.25 +
    noise2D(x * 4, y * 4) * 0.125
  );
}

export default function ThreadsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const el: HTMLCanvasElement = cvs;

    const ctx2d = el.getContext("2d");
    if (!ctx2d) return;
    const ctx: CanvasRenderingContext2D = ctx2d;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let running = true;
    let rafId = 0;
    let mouse = { x: 0.5, y: 0.5 };
    let targetMouse = { x: 0.5, y: 0.5 };

    const lines = createLines(LINE_COUNT);

    function resize() {
      const r = el.getBoundingClientRect();
      el.width = Math.max(1, Math.floor(r.width * dpr));
      el.height = Math.max(1, Math.floor(r.height * dpr));
    }
    resize();
    window.addEventListener("resize", resize);

    const hero = el.closest(".hero");
    const target = (hero || el) as HTMLElement;
    function onMouseMove(e: MouseEvent) {
      const r = el.getBoundingClientRect();
      targetMouse.x = (e.clientX - r.left) / r.width;
      targetMouse.y = 1.0 - (e.clientY - r.top) / r.height;
    }
    function onMouseLeave() {
      targetMouse.x = 0.5;
      targetMouse.y = 0.5;
    }
    target.addEventListener("mousemove", onMouseMove);
    target.addEventListener("mouseleave", onMouseLeave);

    function draw(time: number) {
      if (!running) return;

      const t = time * 0.001;
      mouse.x += (targetMouse.x - mouse.x) * 0.04;
      mouse.y += (targetMouse.y - mouse.y) * 0.04;

      ctx.clearRect(0, 0, el.width, el.height);
      const w = el.width;
      const h = el.height;

      for (const line of lines) {
        const p = line.index / LINE_COUNT;
        const segments = 120;

        ctx.beginPath();

        for (let s = 0; s <= segments; s++) {
          const sx = s / segments;

          const splitOffset = p * 0.4;
          const splitPoint = 0.1 + splitOffset;
          const amplitudeNormal = sx < splitPoint ? 0 : Math.min(1, (sx - splitPoint) / (0.7 - splitPoint));
          const finalAmplitude = amplitudeNormal * 0.5 * 2.2 * (1 + (mouse.y - 0.5) * 0.2);

          const timeScaled = t * (0.3 + p * 0.5) + (mouse.x - 0.5) * 1.0;
          const n1 = fbm(timeScaled + sx * 2.5, p * 5);
          const n2 = fbm(timeScaled + sx * 3.5, p * 7) / 1.5;
          const xnoise = n1 * (1 - sx * 0.3) + n2 * sx * 0.3;

          const y = 0.5 + (p - 0.5) * 0.2 + xnoise * 0.5 * finalAmplitude;
          const px = sx * w;
          const py = (1 - y) * h;

          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        const alpha = Math.max(0, Math.min(1, (1 - p) * 0.85));
        ctx.strokeStyle = `rgba(${LINE_COLOR[0]},${LINE_COLOR[1]},${LINE_COLOR[2]},${alpha * 0.55})`;
        ctx.lineWidth = line.width * dpr;
        ctx.shadowColor = `rgba(${LINE_COLOR[0]},${LINE_COLOR[1]},${LINE_COLOR[2]},${alpha * 0.35})`;
        ctx.shadowBlur = line.blur * dpr;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running) {
            running = true;
            rafId = requestAnimationFrame(draw);
          }
        } else {
          running = false;
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0 }
    );
    if (hero) io.observe(hero);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      io.disconnect();
      window.removeEventListener("resize", resize);
      target.removeEventListener("mousemove", onMouseMove);
      target.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="threads-stage" aria-hidden="true">
      <canvas ref={canvasRef} className="threads" />
    </div>
  );
}
