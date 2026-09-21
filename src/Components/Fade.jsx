"use client";

import React, { useEffect, useRef, useState } from "react";

export function Fade({
  children,
  bottom,
  top,
  left,
  right,
  duration = 800,
  delay = 0,
  distance = "30px",
  className = "",
  style = {},
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  let transformInitial = "none";
  if (bottom) transformInitial = `translate3d(0, ${distance}, 0)`;
  else if (top) transformInitial = `translate3d(0, -${distance}, 0)`;
  else if (left) transformInitial = `translate3d(-${distance}, 0, 0)`;
  else if (right) transformInitial = `translate3d(${distance}, 0, 0)`;

  const transitionStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0)" : transformInitial,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <div ref={domRef} className={className} style={transitionStyle}>
      {children}
    </div>
  );
}

export default Fade;
