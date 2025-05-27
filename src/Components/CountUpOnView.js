import React, { useRef, useState, useEffect } from "react";

function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

const CountUpOnView = ({ end, duration = 700, prefix = "", suffix = "" }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.7 }
    );
    observer.observe(node);

    return () => observer.unobserve(node);
  }, []);

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }

    let start = null;
    let frameId;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(easeOutExpo(progress) * parseInt(end));
      setDisplay(value);
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setDisplay(end);
      }
    };
    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default CountUpOnView;