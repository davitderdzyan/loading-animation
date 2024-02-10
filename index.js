gsap
  .timeline({ repeat: 1 })
  .to(".box", { duration: 2, rotation: 315, x: 600, ease: "bounce" })
  .to(".text-container", { width: 600, duration: 2, ease: "bounce" }, 0)
  .to(".text-container", { width: 300, opacity: 0, duration: 1 }, 2)
  .to(".box", { duration: 1, rotation: 225, x: 300 }, 2)
  .to(".check", { scale: 1, rotation: 135, duration: 1 }, 2);
