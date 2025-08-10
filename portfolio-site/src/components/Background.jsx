import mountain from "../assets/images/mountain.png";
import { useState, useEffect } from "react";
const Background = () => {
  // State to hold the current scroll position
  const [scrollY, setScrollY] = useState(0);

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Update the scrollY state with the new window scroll position
      setScrollY(window.scrollY);
    };

    // Add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const backgroundTransform = `translateY(${scrollY * 0.3}px)`;
  const gradientTransform = `translateY(${scrollY * 0.6}px)`;
  return (
    <>
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mountain})`,
          transform: backgroundTransform,
          willChange: "transform",
        }}
      ></div>
      <div
        className="fixed inset-0 z-10"
        style={{
          background: `radial-gradient(circle at center, rgba(147, 51, 234, 0.4) 0%, transparent 50%)`,
          transform: gradientTransform,
          willChange: "transform",
        }}
      ></div>
    </>
  );
};

export default Background;
